// import { Typography } from "@material-tailwind/react";
// import { useEffect, useState } from "react";
// import { AiFillDollarCircle } from "react-icons/ai";
// import { FaStar, FaUserAlt } from "react-icons/fa";
// import { MdMarkEmailUnread } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const data = useLoaderData();
//   console.log(data);
  const { subcategory_name } = useParams();
  useEffect(() => {
    fetch(
      `https://assignment10-server-mocha.vercel.app/subcrafty//${subcategory_name}`
    )
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  },[subcategory_name])
  // console.log(subcategory_name);
  // setCategoryData(
  //   data.filter(
  //     (singleData) =>
  //       singleData.category.toLowerCase() == subcategory_name.toLowerCase()
  //     )
  //   );
    console.log(subcategory_name);
    return (
      <div>
        {categoryData.map((p) => (
          <div key={p._id} className="flex justify-center items-center">
            <div className="max-w-lg p-4 h-[650px] shadow-md dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="mb-0 capitalize dark:text-gray-800"
                  ></a>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <img
                    src={p?.image}
                    alt=""
                    className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                  />
                  <div className="flex items-center text-xs">
                    <span>${p?.price}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <a rel="noopener noreferrer" href="#" className="block">
                    <h3 className="text-xl font-semibold dark:text-purple-600">
                      {p?.item_name}
                    </h3>
                    <h3 className="text-xl font-semibold dark:text-orange-600">
                      {p?.subcategory_name}
                    </h3>
                  </a>
                  <p className="leading-snug dark:text-gray-600">
                    {p?.short_description}
                  </p>
                  <p className="leading-snug dark:text-gray-600">
                    Rating: {p?.rating}
                  </p>

                  <p className="leading-snug dark:text-gray-600">
                    Processing Time: {p?.processing_time}
                  </p>
                </div>
                {/* <Link to={`/subDetails/${_id}`}>
                <button className="border-2 mt-5 border-black p-2 rounded-xl">
                  View Details
                </button>
              </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Category;
