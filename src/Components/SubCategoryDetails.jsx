import { Link } from "react-router-dom";

const SubCategoryDetails = ({ p }) => {
    const {
      _id,
      item_name,
      subcategory_name,
      image,
      short_description,
      price,
      rating,
      example,
      processing_time,
     
    } = p;
    return (
      <div>
        <Link to={`/category/${subcategory_name}`}>
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
                  src={image}
                  alt=""
                  className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
                <div className="flex items-center text-xs">
                  <span>${price}</span>
                </div>
              </div>
              <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                  <h3 className="text-xl font-semibold dark:text-purple-600">
                    {item_name}
                  </h3>
                  <h3 className="text-xl font-semibold dark:text-orange-600">
                    {subcategory_name}
                  </h3>
                </a>
                <p className="leading-snug dark:text-gray-600">
                  {short_description}
                </p>
                <p className="leading-snug dark:text-gray-600">
                  Rating: {rating}
                </p>

                <p className="leading-snug dark:text-gray-600">
                  Processing Time: {processing_time}
                </p>
              </div>
              {/* <Link to={`/subDetails/${_id}`}>
                <button className="border-2 mt-5 border-black p-2 rounded-xl">
                  View Details
                </button>
              </Link> */}
            </div>
          </div>
        </Link>
      </div>
    );
};

export default SubCategoryDetails;