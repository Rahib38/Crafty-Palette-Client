const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String,
        enum: ["user", "moderator","admin"],
         default: "user" },
    isBlock: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    image: { type: String },
    gender: {
      type: String,
      enum: ["Male", "Female"], // Gender can only be "Male" or "Female"
      required: true
    },
  })
  
  const User = mongoose.model("user", userSchema);

  module.exports = User;