import Swal from "sweetalert2";
import UseAuth from "./UseAuth";
import { Helmet } from "react-helmet";

const AddCraft = () => {
  const { users } = UseAuth();
  const handleSubmit = (e) => {
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

    fetch("https://assignment10-server-mocha.vercel.app/crafty", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(crafty),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        form.reset();
      });
  };
  return (
    <div onSubmit={handleSubmit} className="bg-[#F4F3F0] p-24">
      <Helmet>
        <title>Crafty Palette Add Craft</title>
      </Helmet>
      <form className="space-y-2">
        <div className="md:flex gap-4">
          <div className="md:w-1/2">
            <label> Item Name</label>
            <br />
            <input
              type="text"
              name="itemName"
              placeholder="Enter the item name"
              className="input input-bordered  w-full "
            />
          </div>
          <div className="md:w-1/2">
            <label> Subcategory Name</label>
            <br />
            <select
              className=" border rounded-r-md h-12 w-full"
              name="category"
              required
            >
              <option
                value="Wooden Furniture & Sculptures
"
              >
                Wooden Furniture & Sculptures
              </option>
              <option value="Wooden Home Deco">Wooden Home Deco</option>
              <option value="Wooden Home Deco">Wooden Home Deco</option>
              <option value="Wooden Utensils and Kitchenware">
                Wooden Utensils and Kitchenware
              </option>
              <option value="Jute Home Decor">Jute Home Decor</option>
              <option
                value="Jute Kitchenware & utensils
"
              >
                Jute Kitchenware & utensils
              </option>
              <option
                value="Jute and wooden jewellery
"
              >
                Jute and wooden jewellery
              </option>
            </select>
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="md:w-1/2">
            <label> Image</label>
            <br />
            <input
              type="text"
              name="image"
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
              placeholder="Enter the rating"
              className="input input-bordered  w-full "
            />
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="md:w-1/2">
            <label>customization- example- yes, no</label>
            <br />
            {/* <input
              type="text"
              name="example"
              placeholder="Enter the customization example"
              
             
              className="input input-bordered  w-full "
            /> */}
            <select
              className=" border rounded-r-md h-12 w-full"
              name="example"
              required
            >
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
          <div className="md:w-1/2">
            <label> processing time</label>
            <br />
            <input
              type="text"
              name="time"
              placeholder="Enter the processing time"
              className="input input-bordered  w-full "
            />
          </div>
        </div>
        <div className="md:flex gap-4">
          <div className="md:w-1/2">
            <label> stock Status</label>
            <br />
            <select
              className=" border rounded-r-md h-12 w-full"
              name="stock"
              required
            >
              <option value="In stock<">In stock</option>
              <option value="Made to order">Made to order</option>
            </select>
          </div>
          <div className="md:w-1/2">
            <label> Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={users.email}
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
              value={users.displayName}
              readOnly
              placeholder="Enter the  name"
              className="input input-bordered  w-full "
            />
          </div>
        </div>
        <button className="btn w-full bg-[#331A15] text-white">ADD</button>
      </form>
    </div>
  );
};

export default AddCraft;
