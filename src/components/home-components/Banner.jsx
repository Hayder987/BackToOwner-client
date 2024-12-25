import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Slider from "./Slider";
import banner1 from "../../assets/images/banner-1.jpg";
import banner2 from "../../assets/images/banner-2.jpg";
import banner3 from "../../assets/images/banner-3.jpg";
import banner4 from "../../assets/images/banner-4.jpg";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
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
          <Slider
            banner={banner1}
            header={`${t("slide1h1")}`}
            desc={`${t("slide1p1")}`}
          ></Slider>
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            banner={banner2}
            header={`${t("slide2h1")}`}
            desc={`${t("slide2p1")}`}
          ></Slider>
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            banner={banner3}
            header={`${t("slide3h1")}`}
            desc={`${t("slide3p1")}`}
          ></Slider>
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            banner={banner4}
            header={`${t("slide4h1")}`}
            desc={`${t("slide4p1")}`}
          ></Slider>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
