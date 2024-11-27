import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const CraftyCard = ({ craftyItem }) => {
  const {
    _id,
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
  } = craftyItem;
  return (
    <div>
      <Card className="mt-6 max-w-lg  h-full p-5">
        <CardHeader color="blue-gray">
          <img className=" h-56 w-full" src={image} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {itemName}
          </Typography>
          <Typography>
            {description.slice(0, 50)}{" "}
            <span className="font-bold"> See More....</span>
          </Typography>
          <div className="flex justify-between items-center">
            <Typography className="flex items-center gap-2">
              <AiFillDollarCircle />
              {price}
            </Typography>
            <Typography className="flex items-center gap-2">
              {" "}
              <FaStar />
              {rating}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={`/cardDetails/${_id}`}>
            <Button variant="outlined">Read More</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CraftyCard;
