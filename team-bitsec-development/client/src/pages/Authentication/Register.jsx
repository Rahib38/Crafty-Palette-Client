import { useEffect, useState } from "react";
import {  Link, useNavigate } from 'react-router-dom';
import { useBitContext } from "../../context/BitContext";
import toast from 'react-hot-toast';
import { Helmet } from "react-helmet-async";



const Register = () => {
  // loading efffect for unwanted flash of unauthorization 
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: ''
  })


  const { api,setToken, token, setUser } = useBitContext()
  const navigate = useNavigate()



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
          navigate("/") //if login then redirect to home page
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
  // console.log(userData);

  const handleRegister = async (e) => {
    e.preventDefault();
    // console.log(e);

    if (userData.password.trim() !== userData.confirmPassword.trim()) return toast.error("Password don't match.")
    if (userData?.password.length < 6) return toast.error("Password must be atleast 6 characters.")
    if (!userData.gender) return toast.error("Password choose gender.")
    // console.log('first')

    try {
      const response = await api.post(`/users/register`, userData, {
        headers: {
            'Content-Type': 'application/json',  // Sending JSON data
        },
    });

    
      if (response?.data?.success) {
        if (response?.data?.error) {
          return toast.error(response?.data?.error) // toast
        }
        localStorage.setItem('token', response.data?.token)
        setToken(true)
        setUser(response.data?.data)
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (<>
    <div>
      <Helmet>
        <title>Sign Up | Bitsec</title>

      </Helmet>
  {    loading ? <></> :
   (   <section className="bg-white ">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form onSubmit={(e) => handleRegister(e)} className="w-full max-w-md">
            <div className="flex justify-center mx-auto">
              <img className="w-auto h-7 sm:h-8" src="/logo.jpg" alt="" />
            </div>
            <div className="flex items-center justify-center mt-6">
              <a
                href="#"
                className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 "
              >
                sign up
              </a>
            </div>
            <div className="relative flex items-center mt-8">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>

              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11    focus:border-blue-400 -300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Full Name"
                name="name"
                onChange={onChangeHandler}
                required
              />
            </div>
            <div className="relative flex items-center mt-8">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  className="w-6 h-6 mx-3 text-gray-300 "
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
              </span>

              <input
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11    focus:border-blue-400 -300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Username"
                name="username"
                onChange={onChangeHandler}
                required
              />
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

            <div className="flex flex-col items-start gap-4 overflow-hidden rounded-md p-6 shadow shadow-[#00000050] my-4">
              <span className="text-center font-mono text-base font-black uppercase text-gray-300">
                Please select your gender
              </span>
              <div className="flex items-center gap-4">
                <div className="relative group flex h-[50px] w-[50px] items-center justify-center">
                  <input
                    type="radio"
                    id="radio"
                    name="gender"
                    value="Male"
                    onChange={onChangeHandler}
                    required
                    className="peer z-10 h-full w-full cursor-pointer opacity-0"
                  />
                  <div className=" absolute top-[-45px] left-[-23px] translate-y-[-20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500">
                    <p className="text-[0.9rem] w-max bg-gray-100 font-semibold text-secondary rounded px-3 py-2 ">
                      Male
                    </p>
                  </div>
                  <div className="absolute h-full w-full rounded-full bg-blue-100 p-4 shadow-sm shadow-[#00000050] ring-blue-400 duration-300 peer-checked:scale-110 peer-checked:ring-2"></div>
                  <div className="absolute -z-10 h-full w-full scale-0 rounded-full bg-blue-200 duration-500 peer-checked:scale-[500%]"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute stroke-blue-400"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.5631 16.1199C14.871 16.81 13.9885 17.2774 13.0288 17.462C12.0617 17.6492 11.0607 17.5459 10.1523 17.165C8.29113 16.3858 7.07347 14.5723 7.05656 12.5547C7.04683 11.0715 7.70821 9.66348 8.8559 8.72397C10.0036 7.78445 11.5145 7.4142 12.9666 7.71668C13.9237 7.9338 14.7953 8.42902 15.4718 9.14008C16.4206 10.0503 16.9696 11.2996 16.9985 12.6141C17.008 13.9276 16.491 15.1903 15.5631 16.1199Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path d="M14.9415 8.60977C14.6486 8.90266 14.6486 9.37754 14.9415 9.67043C15.2344 9.96332 15.7093 9.96332 16.0022 9.67043L14.9415 8.60977ZM18.9635 6.70907C19.2564 6.41617 19.2564 5.9413 18.9635 5.64841C18.6706 5.35551 18.1958 5.35551 17.9029 5.64841L18.9635 6.70907ZM16.0944 5.41461C15.6802 5.41211 15.3424 5.74586 15.3399 6.16007C15.3374 6.57428 15.6711 6.91208 16.0853 6.91458L16.0944 5.41461ZM18.4287 6.92872C18.8429 6.93122 19.1807 6.59747 19.1832 6.18326C19.1857 5.76906 18.8519 5.43125 18.4377 5.42875L18.4287 6.92872ZM19.1832 6.17421C19.1807 5.76001 18.8429 5.42625 18.4287 5.42875C18.0145 5.43125 17.6807 5.76906 17.6832 6.18326L19.1832 6.17421ZM17.6973 8.52662C17.6998 8.94082 18.0377 9.27458 18.4519 9.27208C18.8661 9.26958 19.1998 8.93177 19.1973 8.51756L17.6973 8.52662ZM16.0022 9.67043L18.9635 6.70907L17.9029 5.64841L14.9415 8.60977L16.0022 9.67043ZM16.0853 6.91458L18.4287 6.92872L18.4377 5.42875L16.0944 5.41461L16.0853 6.91458ZM17.6832 6.18326L17.6973 8.52662L19.1973 8.51756L19.1832 6.17421L17.6832 6.18326Z"></path>
                  </svg>
                </div>
                <div className="relative group flex h-[50px] w-[50px] items-center justify-center">
                  <input
                    type="radio"
                    id="radio"
                    name="gender"
                    value="Female"
                    onChange={onChangeHandler}
                    required
                    className="peer z-10 h-full w-full cursor-pointer opacity-0"
                  />

                  <div className=" absolute top-[-45px] left-[-23px] translate-y-[-20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500">
                    <p className="text-[0.9rem] w-max bg-gray-100 font-semibold text-secondary rounded px-3 py-2 ">
                      Female
                    </p>
                  </div>
                  <div className="absolute h-full w-full rounded-full bg-pink-100 p-2 shadow-sm shadow-[#00000050] ring-pink-400 duration-300 peer-checked:scale-110 peer-checked:ring-2"></div>
                  <div className="absolute -z-10 h-full w-full scale-0 rounded-full bg-pink-200 duration-500 peer-checked:scale-[500%]"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35px"
                    height="35px"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute fill-pink-400"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20 9C20 13.0803 16.9453 16.4471 12.9981 16.9383C12.9994 16.9587 13 16.9793 13 17V19H14C14.5523 19 15 19.4477 15 20C15 20.5523 14.5523 21 14 21H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V21H10C9.44772 21 9 20.5523 9 20C9 19.4477 9.44772 19 10 19H11V17C11 16.9793 11.0006 16.9587 11.0019 16.9383C7.05466 16.4471 4 13.0803 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9ZM6.00365 9C6.00365 12.3117 8.68831 14.9963 12 14.9963C15.3117 14.9963 17.9963 12.3117 17.9963 9C17.9963 5.68831 15.3117 3.00365 12 3.00365C8.68831 3.00365 6.00365 5.68831 6.00365 9Z"
                    ></path>
                  </svg>
                </div>
              </div>
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
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={onChangeHandler}
                required
              />
            </div>
            <div className="mt-6 ">
              <button
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 "
                type="submit"
              >
                Sign Up
              </button>

              <div className="mt-6 text-center ">
                <Link to="/auth/login" className="text-sm text-blue-500 hover:underline ">
                  Already have an account?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>)
}
    </div>
  </>
  );
};

export default Register;


