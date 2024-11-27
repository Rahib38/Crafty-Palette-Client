import { Typography } from "@material-tailwind/react";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
const CardDetails = () => {
  const card = useLoaderData();
  const { _id } = useParams();
  const singleCard = card.find((cards) => cards._id == _id);

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={singleCard?.image}
              alt=""
              className="block object-cover object-center w-full rounded-md dark:bg-gray-500"
            />
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-purple-600">
                {singleCard?.itemName}
              </h3>
              <h3 className="text-xl font-semibold dark:text-orange-600">
                {singleCard?.category}
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-600">
              {singleCard?.description}
            </p>
            <div className="flex justify-between items-center">
              <Typography className="flex items-center gap-2">
                <AiFillDollarCircle />
                {singleCard?.price}
              </Typography>
              <Typography className="flex items-center gap-2">
                {" "}
                <FaStar />
                {singleCard?.rating}
              </Typography>
            </div>
            <div className="flex justify-between items-center">
              <Typography className="flex items-center gap-2">
                Example: {singleCard?.example}
              </Typography>
              <Typography className="flex items-center gap-2">
                {" "}
                Time: {singleCard?.time}
              </Typography>
            </div>
            <h1>{singleCard?.stock}</h1>
            <div className="flex justify-between items-center">
              <Typography className="flex items-center gap-2">
                <FaUserAlt />

                {singleCard?.name}
              </Typography>
              <Typography className="flex items-center gap-2">
                {" "}
                <MdMarkEmailUnread />
                {singleCard?.email}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
