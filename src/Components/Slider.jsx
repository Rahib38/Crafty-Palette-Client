import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Autoplay, Navigation, Pagination, History } from "swiper/modules";

const Slider = () => {
  return (
    <div className="mb-5 mt-5 ">
      {" "}
      <Swiper
        spaceBetween={50}
        loop={true}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        history={{
          key: "/",
        }}
        modules={[Autoplay, Navigation, Pagination, History]}
        className="mySwiper md:h-[550px] rounded-xl"
      >
        <SwiperSlide data-history="/">
          <div className="absolute top-[25%] left-[30%] ">
            <h1 className="md:text-4xl font-bold text-white">
              In the realm of art
            </h1>
            <p className="text-xl font font-semibold">
              every thread woven carries with it a story waiting to be told.{" "}
            </p>
          </div>
          <img
            className="w-full h-[100%]"
            src="https://www.bergerpaints.com/blog/wp-content/uploads/2023/07/beautiful-painted-furniture-1280x720.jpg"
          />
        </SwiperSlide>
        <SwiperSlide data-history="/">
          <div className="absolute top-[25%] left-[30%] ">
            <h1 className="md:text-4xl font-bold text-white">
              In the realm of art
            </h1>
            <p className="text-xl font font-semibold">
              every thread woven carries with it a story waiting to be told.{" "}
            </p>
          </div>
          <img
            className="w-full h-full"
            src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/at%2Fstyle%2F2020-08%2FOld%20wood%20furniture%2FAlexander_Doherty_Marius_Chira-212_5th__Ave_23517"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide data-history="/">
          <div className="absolute top-[25%] left-[30%] ">
            <h1 className="md:text-4xl font-bold text-white">
              In the realm of art
            </h1>
            <p className="text-xl font font-semibold">
              every thread woven carries with it a story waiting to be told.{" "}
            </p>
          </div>
          <img
            className="w-full h-full"
            src="https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-vintage-cutlery-for-cooking-on-rustic-wooden-background-set-of-wooden-photo-image_2251255.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide data-history="/">
          <div className="absolute top-[25%] left-[30%] ">
            <h1 className="md:text-4xl font-bold text-white">
              In the realm of art
            </h1>
            <p className="  font font-semibold">
              every thread woven carries with it a story waiting to be told.{" "}
            </p>
          </div>
          <img
            className="w-full h-full"
            src="https://i.ytimg.com/vi/JLjzZr7oEn4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC6W9fZaU5D5tWLvPc9jsgk2HwnWA"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
