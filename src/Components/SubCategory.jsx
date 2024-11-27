// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import SubCategoryDetails from "./SubCategoryDetails";

const SubCategory = () => {
  // const subCrafty = useLoaderData()
  // console.log(subCrafty);
  const [subCrafty, setSubCrafty] = useState([]);
  useEffect(() => {
    fetch("https://assignment10-server-mocha.vercel.app/subcrafty")
      .then((res) => res.json())
      .then((data) => setSubCrafty(data));
  }, []);
  return (
    <div className="mt-12">
      <div className="mx-auto container flex flex-col mt-5 mb-10 space-y-3 items-center">
        <h1 className="text-3xl font-semibold text-center">
          Selected your Art & Craft
        </h1>
        <p className="text-center">
          Art and craft are avenues through which creativity finds its voice,
          <br />
          transcending the boundaries of conventional expression. In the realm
          of art, every stroke of the brush
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subCrafty.map((p) => (
          <SubCategoryDetails key={p._id} p={p}></SubCategoryDetails>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;
