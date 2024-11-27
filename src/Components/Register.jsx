import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";
import toast, { Toaster } from "react-hot-toast";

import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";
  const { createUser, updateUserProfile } = UseAuth();
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password, fullName, image } = data;
     if (password.length < 6) {
       return toast.error("use must 6 digit");
     }
     if (!/[A-Z]/.test(password)) {
       return toast.error("You Must use an uppercase in the password");
     }

     if (!/[a-z]/.test(password)) {
       return toast.error("You Must use a Lowercase in the password");
     }
    createUser(email,password)
      .then(() => {
        updateUserProfile(fullName,image)
      }).then(() => {
      navigate(from)
    })
    return  toast.success("Register SuccessFully");
  } 
  
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-right" data-aos-duration="3000">
      <Helmet>
        <title>Crafty Palette Register</title>
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div
          className="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
        >
          <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
            Join us Now
          </div>
          <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
            Enter your credentials to get access account
          </div>

          <div className="mt-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col mb-5">
                <label
                  // for="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  Name:
                </label>
                <div className="relative">
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                  >
                    <i className="fas fa-user text-blue-500"></i>
                  </div>

                  <input
                    type="text"
                    name="name"
                    className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                    placeholder="Enter your name"
                    {...register("fullName", { required: true })}
                  />
                  {errors.fullName && (
                    <span className="text-red-500 font-semibold">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <label
                  // for="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  Photo Url:
                </label>
                <div className="relative">
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                  >
                    <i className="fas fa-user text-blue-500"></i>
                  </div>

                  <input
                    type="text"
                    name="PhotoURL"
                    className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                    placeholder="Enter your Photo Url"
                    {...register("image", { required: true })}
                  />
                  {errors.image && (
                    <span className="text-red-500 font-semibold">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <label
                  // for="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  E-Mail Address:
                </label>
                <div className="relative">
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                  >
                    <i className="fas fa-at text-blue-500"></i>
                  </div>

                  <input
                    type="email"
                    name="email"
                    className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                    placeholder="Enter your email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500 font-semibold">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  // for="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password:
                </label>
                <div className="relative">
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                  >
                    <span>
                      <i className="fas fa-lock text-blue-500"></i>
                    </span>
                  </div>

                  <input
                    type="password"
                    name="password"
                    className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                    placeholder="Enter your password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-500 font-semibold">
                      This field is required
                    </span>
                  )}
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
                >
                  <span className="mr-2 uppercase">Sign Up</span>
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      // stroke-linecap="round"
                      // stroke-linejoin="round"
                      // stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <a
            href="#"
            target="_blank"
            className="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
          >
            <span className="ml-2">
              You have an account?
              <Link
                to="/login"
                className="text-xs ml-2 text-blue-500 font-semibold"
              >
                Login here
              </Link>
            </span>
          </a>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
