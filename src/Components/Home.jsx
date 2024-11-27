import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import CraftyCard from "./CraftyCard";
import SubCategory from "./SubCategory";
import { Helmet } from "react-helmet";
import OurTeam from "./OurTeam";
import { Typewriter } from "react-simple-typewriter";
import Review from "./Review";

const Home = () => {
  //   const handleType = (count: number) => {
  //   // access word count number
  //   console.log(count)}
  // }

  // const handleDone = () => {
  //   console.log(`Done after 5 loops!`)
  // }
  const crafty = useLoaderData();
  console.log(crafty);
    return (
      <div>
        <Helmet>
          <title>Crafty Palette Home</title>
        </Helmet>
        <Slider></Slider>
        <div className="mx-auto container flex flex-col mt-5 mb-10 space-y-3 items-center">
          <h1
            style={{
              paddingTop: "5rem",
              margin: "auto 0",
              fontWeight: "normal",
            }}
            className="text-3xl font-semibold"
          >
            Explore Your{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Design", "Art Item"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
              />
            </span>
          </h1>
          <p className="text-center">
            Art and craft are avenues through which creativity finds its voice,
            <br />
            transcending the boundaries of conventional expression. In the realm
            of art, every stroke of the brush
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {crafty.slice(0, 6).map((craftyItem) => (
            <CraftyCard key={crafty._id} craftyItem={craftyItem}></CraftyCard>
          ))}
        </div>
        <div>
          <SubCategory></SubCategory>
          <Review></Review>
          <OurTeam></OurTeam>
        </div>
      </div>
    );
};

export default Home;