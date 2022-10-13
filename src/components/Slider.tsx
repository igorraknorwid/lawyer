import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      className='absolute top-0 right-0 cursor-pointer z-50'
      onClick={() => {
        swiper.slideNext();
      }}
    >
      Slide to the next slide
    </button>
  );
}

function SlidePrevButton() {
  const swiper = useSwiper();
  console.log(swiper);

  return (
    <button
      className='absolute top-0 left-[-100px] cursor-pointer z-50'
      onClick={() => swiper.slidePrev()}
    >
      Slide to the previous slide
    </button>
  );
}

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
    </div>
  );
};
