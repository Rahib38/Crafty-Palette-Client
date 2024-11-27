import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useBitContext } from "../../context/BitContext";
import toast from 'react-hot-toast';

const Login = () => {
  // loading efffect for unwanted flash of unauthorization 
  const [loading, setLoading] = useState(false)

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  console.log(userData)
  const { api, setToken, token, setUser } = useBitContext();
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state ? location.state?.from : "/";


  // check user is login 
  useEffect(() => {
    // check user is logged in or not 
    const checkLoginStatus = async () => {
      try {
        setLoading(true)
        const response = await api.get(`/users/dashboard`);
        // console.log(response.data)
        if (response.data?.success) {
          setToken(true)
          navigate(from) //if login then redirect to home page
        } else {
          setToken(false)
        }
        // console.log('User is logged in:', response.data);
      } catch (error) {
        console.log(error)
        if (error.response) {
          console.log('User is not logged in:', error?.response?.data?.error);
        }
      } finally {
        setLoading(false)
      }
    };

    checkLoginStatus()
  }, [token])


  // perfectly merge userdata with inpout
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData((prev) => ({ ...prev, [name]: value }));
  };
  console.log(userData);

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(e);

    try {

      const response = await api.post(`/users/login`, userData, {
        headers: {
          "Content-Type": "application/json", // Sending JSON data
        },
      });
      if (response?.data?.success) {
        localStorage.setItem("token", response.data?.token);
        setToken(true);
        setUser(response?.data?.data)
        navigate("/")
      } else {
        if (response?.data?.error) {
          return toast.error(response?.data?.error); // toast
        }
      }
    } catch (error) {
      console.log(error)
    }


  };

  return <div>
    <Helmet>
      <title>Sign In | Bitsec</title></Helmet>
    {loading ? <></> : <section className="bg-white ">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form onSubmit={(e) => handleLogin(e)} className="w-full max-w-md">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src="/logo.jpg" alt="" />
          </div>
          <div className="flex items-center justify-center mt-6">
            <a
              href="#"
              className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 "
            >
              sign in
            </a>
          </div>


          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              type="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11    focus:border-blue-400 -300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
              name="email"
              onChange={onChangeHandler}
              required

            />
          </div>


          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              type="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 -300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
              name="password"
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className="mt-6 ">
            <button
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 "
              type="submit"
            >
              Sign In
            </button>

            <div className="mt-6 text-center ">
              {"   Don't have any account?"}
              <span className="text-[#6930C3] font-semibold">
                <Link to={'/auth/register'}> Sign Up
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>}
  </div>
}
export default Login