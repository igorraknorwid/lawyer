import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slide = () => {
  return (
    <div className='py-5 px-20  '>
      <img className='' src={"/stars.png"} alt={"starts"} />
      <div className='w-10 h-1 bg-[#cdb171] my-10 mx-auto'></div>
      <p className='text-center  text-xl'>
        Firma przeprowadziła mnie przez bardzo trudny okres w moim życiu. Pan
        Berenji towarzyszył mi na każdym kroku i udzielał mi niesamowitych porad
        prawnych.
      </p>
      <div className='w-10 h-1 bg-[#cdb171] my-10 mx-auto'></div>
      <p className='text-center'>Paulina K.</p>
    </div>
  );
};

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      loop={true}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      ...
    </Swiper>
  );
};
