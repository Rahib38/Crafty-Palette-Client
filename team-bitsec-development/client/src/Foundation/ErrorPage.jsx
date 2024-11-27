// react icons
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="boxShadow min-h-screen px-10 w-full flex items-center flex-col justify-center pb-[50px] rounded-xl">
      <img
        src="https://i.ibb.co/nP1Cngw/Error-Server-1.png"
        alt="illustration"
        className="w-full lg:w-[500px]"
      />
      <h1 className="text-[#1C3177] text-[1.8rem] sm:text-[2.5rem] font-[800] mt-3 w-full lg:w-[55%] text-center">
        Thunder 404{" "}
      </h1>

      <Link to={"/"}>
        <button className="relative inline-flex items-center px-8 py-2.5 mt-5 overflow-hidden text-lg font-medium text-primary border-2 border-primary rounded-full hover:text-black group hover:bg-[#72EFDD]">
          <span className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative text-[1rem] group-hover:pr-4 transition-all duration-400">
            Go Back
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
