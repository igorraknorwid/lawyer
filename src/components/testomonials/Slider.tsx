import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface ITestimonial {
  id: number;
  text: string;
  name: string;
}

interface IMySlide {
  items: ITestimonial[];
}

const Slide = ({ id, name, text }: ITestimonial) => {
  const [state, setState] = React.useState(false);
  const topRef = React.useRef<HTMLDivElement>(null);
  const bottomRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setState(true);
      }
    });
    const bottomObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setState(true);
      }
    });
    if (topRef.current) {
      observer.observe(topRef.current);
    }
    if (bottomRef.current) {
      bottomObserver.observe(bottomRef.current);
    }
  }, []);
  return (
    <div className='py-5 px-20  '>
      <div style={{ height: "1px" }} ref={topRef}></div>
      <img className='' src={state ? "/stars.png" : ""} alt={"starts"} />
      <div className='w-10 h-1 bg-[#cdb171] my-10 mx-auto'></div>
      <p className='text-center  text-xl'>{text}</p>
      <div className='w-10 h-1 bg-[#cdb171] my-10 mx-auto'></div>
      <p className='text-center'>{name}</p>
      <div style={{ height: "1px" }} ref={bottomRef}></div>
    </div>
  );
};

export default ({ items }: IMySlide) => {
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
        {items.map((item) => (
          <div key={item.id}>
            <SwiperSlide>
              <Slide id={item.id} name={item.name} text={item.text} />
            </SwiperSlide>
          </div>
        ))}
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};
