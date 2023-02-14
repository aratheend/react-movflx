import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Slider() {
  return (
    <div>
      <Swiper slidesPerView={2}>
        <SwiperSlide>
          <div className="w-full h-screen bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url("https://themehut.co/wp/movflx/wp-content/uploads/2022/08/ucm_poster07.jpg")`,}}>
            <div className="flex flex-col h-full justify-center">
            <span className="text-main-yellow font-bold">Movflx</span>
            <span className="text-6xl">Unlimited <span>Movie</span>, <br /> TVs Shows, & More.</span>
            <p>
              <span>PG</span>
            </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url("https://themehut.co/wp/movflx/wp-content/uploads/2022/08/ucm_poster06.jpg")`,}}>
            <div className="flex flex-col h-full justify-center">
            <span className="text-main-yellow font-bold">Movflx</span>
            <span className="text-6xl">Unlimited <span>Movie</span>, <br /> TVs Shows, & More.</span>
            <p>
              <span>PG</span>
            </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
