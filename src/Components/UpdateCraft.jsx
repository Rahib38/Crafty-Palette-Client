import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "./UseAuth";

const UpdateCraft = () => {
  const { users } = UseAuth();
  const update = useLoaderData();
  console.log(update);
  const { id } = useParams();

  const handleUpdateCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.itemName.value;
    const category = form.category.value;
    const image = form.image.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const example = form.example.value;
    const time = form.time.value;
    const stock = form.stock.value;
    const email = users.email;
    const name = users.displayName;

    const crafty = {
      itemName,
      category,
      image,
      description,
      price,
      rating,
      example,
      time,
      stock,
      email,
      name,
    };
    console.log(crafty);
    //  console.log(_id);
    fetch(`https://assignment10-server-mocha.vercel.app/crafty//${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(crafty),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Crafty Updated SuccessFully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        form.reset();
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-4xl text-center font-bold mb-2">Update Crafts</h1>
      <form onSubmit={handleUpdateCraft} className="space-y-2">
        <div className="md:flex gap-4">
          <div className="md:w-1/2">
            <label> Item Name</label>
            <br />
            <input
              type="text"
              name="itemName"
              defaultValue={update?.itemName}
              placeholder="Enter the item name"
              className="input input-bordered  w-full "
            />
          </div>
          <div className="md:w-1/2">
            <label> Subcategory Name</label>
            <br />
            <input
              type="text"
              name="category"
              defaultValue={update?.category}
              placeholder="Enter the Subcategory  name"
              className="input input-bordered  w-full "
            />
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="md:w-1/2">
            <label> Image</label>
            <br />
            <input
              type="text"
              name="image"
              defaultValue={update?.image}
              placeholder="Enter the image URL"
              className="input input-bordered  w-full "
            />
          </div>
          <div className="md:w-1/2">
            <label> short description</label>
            <br />
            <input
              type="text"
              name="description"
              defaultValue={update?.description}
              placeholder="Enter the short description"
              className="input input-bordered  w-full "
            />
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="md:w-1/2">
            <label> Price</label>
            <br />
            <input
              type="number"
              name="price"
              defaultValue={update?.price}
              placeholder="Enter the price"
              className="input input-bordered  w-full "
            />
          </div>
          <div className="md:w-1/2">
            <label> Rating</label>
            <br />
            <input
              type="number"
              name="rating"
              defaultValue={update?.rating}
              placeholder="Enter the rating"
              className="input input-bordered  w-full "
            />
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="md:w-1/2">
            <label>customization- example- yes, no</label>
            <br />
            <input
              type="text"
              name="example"
              defaultValue={update?.example}
              placeholder="Enter the customization example"
              className="input input-bordered  w-full "
            />
          </div>
          <div className="md:w-1/2">
            <label> processing time</label>
            <br />
            <input
              type="text"
              name="time"
              defaultValue={update?.time}
              placeholder="Enter the processing time"
              className="input input-bordered  w-full "
            />
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="md:w-1/2">
            <label> stock Status</label>
            <br />
            <input
              type="text"
              name="stock"
              defaultValue={update?.stock}
              placeholder="Enter the - In stock, Made to Order"
              className="input input-bordered  w-full "
            />
          </div>
          <div className="md:w-1/2">
            <label> Email</label>
            <br />
            <input
              type="email"
              name="email"
              defaultValue={users?.email}
              readOnly
              placeholder="Enter the Email"
              className="input input-bordered  w-full "
            />
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="md:w-1/2">
            <label> Name</label>
            <br />
            <input
              type="text"
              name="name"
              defaultValue={users?.displayName}
              readOnly
              placeholder="Enter the  name"
              className="input input-bordered  w-full "
            />
          </div>
        </div>
        <button className="btn w-full bg-[#331A15] text-white">
          Update Crafty
        </button>
      </form>
    </div>
  );
};

export default UpdateCraft;
