import { useEffect, useState } from "react";
import UseAuth from "./UseAuth";
import { Typography } from "@material-tailwind/react";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MyArtAndCraftList = () => {
  const { users } = UseAuth();

  const [item, setItem] = useState([]);
  console.log(item);
  useEffect(() => {
    fetch(`https://assignment10-server-mocha.vercel.app/crafty/${users?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [users]);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const remaining = item.filter((cof) => cof._id !== _id);
        setItem(remaining);
        fetch(`https://assignment10-server-mocha.vercel.app/crafty/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const yes = () => {
    const yesData = item.filter((data) => data.example == "yes");
    setItem(yesData);
    // console.log(yesData);
  };
  const no = () => {
    const noData = item.filter((data) => data.example == "no");
    setItem(noData);
  };

  return (
    <div>
      <div className="text-center mb-8">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn m-1">
            All
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={yes}>Yes</a>
            </li>
            <li>
              <a onClick={no}>No</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Helmet>
          <title>Crafty Palette My Art And Craft</title>
        </Helmet>

        {item?.map((p) => (
          <div key={p}>
            <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-2">
                  <img
                    src={users.photoURL}
                    alt=""
                    className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300"
                  />
                  <div className="-space-y-1">
                    <h2 className="text-sm font-semibold leading-none">
                      {p.name}
                    </h2>
                    <span className="inline-block text-xs leading-none dark:text-gray-600">
                      {p.stock}
                    </span>
                  </div>
                </div>
                <button title="Open options" type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                    <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                    <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                  </svg>
                </button>
              </div>
              <img
                src={p.image}
                alt=""
                className="object-cover object-center w-full h-72 dark:bg-gray-500"
              />
              <div className="p-6 space-y-4 text-2xl font-semibold">
                <h1>{p.itemName}</h1>
                <div className="flex justify-between items-center">
                  <Typography className="flex items-center gap-2">
                    Price: <AiFillDollarCircle />
                    {p?.price}
                  </Typography>
                  <Typography className="flex items-center gap-2">
                    {" "}
                    Rating: <FaStar />
                    {p?.rating}
                  </Typography>
                </div>
                <Typography className="flex items-center gap-2">
                  {" "}
                  customization-:
                  {p?.example}
                </Typography>

                <div className="flex justify-between items-center">
                  <Typography className="flex items-center gap-2">
                    <Link to={`/updateCraft/${p._id}`}>
                      <button className=" border-2 border-black rounded-2xl p-2">
                        Update
                      </button>
                    </Link>
                  </Typography>
                  <Typography className="flex items-center gap-2">
                    <button
                      onClick={() => handleDelete(p._id)}
                      className=" border-2 border-black rounded-xl p-2"
                    >
                      {" "}
                      x
                    </button>
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArtAndCraftList;
