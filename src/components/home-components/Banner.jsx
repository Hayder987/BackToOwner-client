import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Slider from "./Slider";
import banner1 from "../../assets/images/banner-1.jpg";
import banner2 from "../../assets/images/banner-2.jpg";
import banner3 from "../../assets/images/banner-3.jpg";
import banner4 from "../../assets/images/banner-4.jpg";

const Banner = () => {
  return (
    <div className="mt-6">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        <SwiperSlide>
          <Slider banner={banner1} 
          header="Lost It? Find It!" 
          desc="Easily search or report lost and found items. Let’s bring belongings back to their rightful owners!"
          ></Slider>
        </SwiperSlide>

        <SwiperSlide>
          <Slider banner={banner2}
          header="Your Gateway to Lost and Found" 
          desc="Connecting people with their lost treasures. Together, we make finding simple and effective"
          ></Slider>
        </SwiperSlide>

        <SwiperSlide>
          <Slider banner={banner3}
          header="Reconnecting Pets with Their Precious Belongings" 
          desc="Your pet’s lost item is just a search away. Join our mission to reunite every pet with what they need most."
          ></Slider>
        </SwiperSlide>

        <SwiperSlide>
          <Slider banner={banner4}
          header="Lost Something? We've Got Your Back!" 
          desc="From misplaced keys to lost pets, we help bridge the gap between lost and found."
          ></Slider>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
