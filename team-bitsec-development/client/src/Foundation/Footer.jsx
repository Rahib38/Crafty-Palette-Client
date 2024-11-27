import React from 'react'
import { CgFacebook } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

import { SlArrowUp } from "react-icons/sl";
import { Link } from 'react-router-dom';


const Footer = ({ scrollToTop }) => {


  return (
    <div>
      <footer className="bg-white boxShadow rounded-xl w-full p-3 lg:p-4 relative">
        <div

          className="flex justify-between gap-[30px] flex-col sm:flex-row flex-wrap w-full max-w-screen-lg mx-auto">

          <div className="w-full sm:w-[25%] ">
            {/* 
    <img src="/logo.jpg" alt="logo"

         className="w-[120px] mb-[20px]"/> */}
            <Link
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center  mb-[20px]"
            >
              <img src="/logo.jpg" alt="" className="size-12 rounded-full" />
              <span className="ml-2 text-2xl  font-bold tracking-wide text-gray-800 uppercase ">
                Bitsec
              </span>
            </Link>

            <div className="flex flex-col gap-[20px] text-primary">

              <span><a

                className="text-[0.9rem] flex items-center gap-[8px] cursor-pointer">

                <IoLocationOutline className="text-[1.2rem]" />

                Gulshan one, Dhaka North, Dhaka

              </a></span>

              <span>
                <a
                  href="mailto:admin@gmail.com"
                  className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer"
                >
                  <MdOutlineEmail className="text-[1.1rem]" />
                  admin@gmail.com
                </a>
              </span>

              <span>
                <a
                  href="tel:+8801305282768"
                  className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer"
                >
                  <MdOutlineLocalPhone className="text-[1.1rem]" />
                  +880167907675
                </a>
              </span>
j

            </div>

          </div>



          <div className="">

            <h3 className="text-[1.2rem] font-semibold text-text mb-2">Services</h3>

            <div className="flex text-black flex-col gap-[10px]">

              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">UI

                Components</p>

              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Website

                Templates</p>

              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Icons</p>

              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Opacity

                Palette</p>

              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Blocks</p>

            </div>

          </div>





          <div className="">

            <h3 className="text-[1.2rem] font-semibold text-text mb-2">Company</h3>

            <div className="flex text-black flex-col gap-[10px]">

              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Service</p>

              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Features</p>

              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Our

                Team</p>

              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Portfolio</p>

              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Blog</p>

              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Contact

                Us</p>

            </div>

          </div>





          <div className="">

            <h3 className="text-[1.2rem] font-semibold text-text mb-2">Our Social Media</h3>

            <div className="flex text-black flex-col gap-[10px]">

              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Dribbble</p>

              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Behance</p>

              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Medium</p>

              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Instagram</p>

              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Facebook</p>

              <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Twitter</p>

            </div>

          </div>



          <div className="w-full">

            <h3 className="text-[1.2rem] font-semibold text-text mb-2">Join a

              Newsletter</h3>

            <div className="flex gap-[2px] w-full sm:w-[40%] flex-col text-text relative">

              <label className="text-[0.9rem]">Your Email</label>

              <input type="email"

                className="py-3 px-4 pr-[90px] w-full rounded-md border border-primary outline-none"

                placeholder="Email address" />



              <button

                className="px-4 h-[67%] rounded-r-md bg-[seagreen] text-white absolute top-[24px] right-0">Submit

              </button>

            </div>

          </div>

        </div>
        {/* hjh */}
        <div

          className="w-full flex items-center justify-center pt-[30px] flex-col gap-[20px] pb-[130px]">

          {/* <img src="https://i.ibb.co/ZHYQ04D/footer-logo.png" alt="logo"

            className="w-[150px]" /> */}



          <p className="text-[0.9rem] text-center sm:text-start text-gray-600 font-bold">High level

            experience in web design and development knowledge, producing quality work.

          </p>



          <button className="py-2 px-4 rounded-full bg-[seagreen] text-white">Contact Us</button>



          <div className="flex gap-[15px] text-black mt-4">

            <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">

              <CgFacebook />

            </a>

            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">

              <BsTwitter />

            </a>

            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">

              <BsInstagram />

            </a>

            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow">
              <BsLinkedin />
            </a>
          </div>
        </div>



        <div

          className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-between w-full">
          <p className="text-[0.9rem]  text-center w-full text-base sm:text-gray-200">© {new Date().getFullYear()} All Rights Reserved</p>

          <SlArrowUp
            onClick={scrollToTop}
            className="p-2 rounded-full border border-gray-300 cursor-pointer text-[2rem] text-gray-300 hover:text-black hover:border-black" />

        </div>



        <img src="https://i.ibb.co/zNk7XT4/Rectangle-97.png" alt="background/image"

          className="absolute bottom-[20px] sm:bottom-0 left-0 right-0 z-10 rounded-b-xl" />

        <img src="https://i.ibb.co/0mp2FwS/Rectangle-95.png"

          alt="background/image"

          className="absolute bottom-0 left-0 right-0 z-10 rounded-b-xl " />

      </footer>
    </div>
  )
}

export default Footer