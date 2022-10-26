import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ITestimonial } from "../../types";

interface IMySlide {
  item: ITestimonial;
  state: boolean;
}

interface IMySlider {
  items: ITestimonial[];
  state: boolean;
}

const Slide = ({ item, state }: IMySlide) => {
  return (
    <div className='relative py-5 px-8 xl:px-20  '>
      <img className='' src={state ? "/stars.png" : ""} alt={"starts"} />
      <div className='w-10 h-1 bg-[#cdb171] my-10 mx-auto'></div>
      <p className='text-center  xl:text-lg'>{item.text}</p>
      <div className='w-10 h-1 bg-[#cdb171] my-10 mx-auto'></div>
      <p className='text-center'>{item.name}</p>
    </div>
  );
};

export default ({ items, state }: IMySlider) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        loop={true}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
      >
        {items.map((item, index) => (
          <div key={index}>
            <SwiperSlide>
              <Slide item={item} state={state} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
