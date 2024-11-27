import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";

const SubDetails = () => {
      const subData = useLoaderData();
      const { _id } = useParams();
      const singleData = subData.find((cards) => cards._id == _id);
    return (
      <div>
        <Helmet>
          <title>Crafty Palette Subcategory Details</title>
        </Helmet>
        <div>
          <div className=" p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div className="space-y-4 flex flex-col md:flex-row gap-4">
              <div className="space-y-2">
                <img
                  src={singleData?.image}
                  alt=""
                  className=" object-cover object-center w-full rounded-md dark:bg-gray-500"
                />
                <div className=" items-center text-xs"></div>
              </div>
              <div className="space-y-5">
                <a rel="noopener noreferrer" href="#" className="block">
                  <h3 className="text-xl font-semibold dark:text-purple-600">
                    {singleData?.item_name}
                  </h3>
                  <h3 className="text-xl font-semibold dark:text-orange-600">
                    {singleData?.subcategory_name}
                  </h3>
                </a>
                <p className="leading-snug dark:text-gray-600">
                  {singleData?.short_description}
                </p>
                <p className="leading-snug dark:text-gray-600">
                  Rating: {singleData?.rating}
                </p>

                <p className="leading-snug dark:text-gray-600">
                  Processing Time: {singleData?.processing_time}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SubDetails;