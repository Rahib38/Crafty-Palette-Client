const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const generateTokenAndSetCookie = require('../utils/generateTokenAndSetCookie');

const register = async (req, res) => {

    try {
        const { name, username, email, gender, password, confirmPassword } = req.body;


        if (!name || !username || !email || !gender || !password || !confirmPassword) {
            return res.status(400).json({ success: false, error: "Please fill all the fields." })
        }


        if (password.trim() !== confirmPassword.trim()) {
            return res.status(400).json({ success: false, error: "Passwords don't match" })
        }
        if (password.length < 6) {
            return res.status(400).json({ success: false, error: "Password must be atleast 6 characters." })
        }

        const user = await User.findOne({
            $or: [
                { username: username },
                { email: email }
            ]
        });

        if (user) {
            return res.status(200).json({ success: true, error: "User is  already exists" })
        }

        // HASHING PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password.trim(), salt)

        const newUser = new User({
            name,
            username,
            email,
            password: hashedPassword,
            gender
        })

        if (newUser) {
            // Generate Jwt Token
            const token = generateTokenAndSetCookie(newUser._id, res)

            await newUser.save();

            res.status(201).json({
                success: true,
                data: {
                    _id: newUser._id,
                    name: newUser.name,
                    username: newUser.username,
                    gender: user.gender
                },
                token,
                message: "User Created Successfully"
            })
        } else {
            res.status(200).json({ success: false, error: "Invalid user Data" })
        }
    } catch (error) {
        console.log("Error in Signup Controller", error)
        res.status(500).json({ error: "Internal Server Error", message: error.message })
    }
}

const login = async (req, res) => {

    try {

        const { email, password } = req.body;
        // console.log(req.body)

        if (!email || !password) {
            return res.status(400).json({ success: false, error: "Please fill all the fields." })
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(200).json({ success: false, error: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(200).json({ success: false, error: "Invalid Credentials" })
        }

        if (user && isMatch) {
            const token = generateTokenAndSetCookie(user._id, res);

            res.status(200).json({
                success: true,
                data: {
                    //    _id: user._id,
                    name: user.name,
                    username: user.username,
                    gender: user.gender
                },
                token,
                message: "User Login Successfully"
            })
        } else {
            res.status(502).json({ success: false, error: "Invalid user Data" })
        }

    } catch (error) {
        console.log("Error in Signin Controller", error)
        res.status(500).json({ error: "Internal Server Error", message: error.message })
    }
}

const dashboard = async (req, res) => {
    try {
        const userId = req.userId;

        if (!userId) {
            return res.status(400).json({ success: false, message: 'User ID not provided' });
        }

        // Find user by ID and select the desired fields
        const response = await User.findOne({ _id: userId }).select(" username name gender");

        if (!response) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Send success response with user data
        res.status(200).json({
            success: true,
            message: 'Authenticated',
            data: {
                //    _id: user._id,
                name: response?.name,
                username: response?.username,
                gender: response?.gender
            },
        });
    } catch (error) {
        // Log the error and send a failure response
        console.error('Error fetching user:', error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

module.exports = { register, login, dashboard }