import React from "react";
import { ITestimonial, TCard } from "../../types";
import MySlider from "./Slider";

interface IInsideTestimonials {
  testimonials: ITestimonial[];
  state: boolean;
}

export default function InsideTestimonials({
  testimonials,
  state,
}: IInsideTestimonials) {
  return (
    <div
      className='py-24'
      style={
        state
          ? { background: "url(/testimonials.webp) no-repeat top/cover" }
          : { backgroundColor: "transparent" }
      }
    >
      <h2 className='text-3xl xl:text-6xl text-center'>
        CO MÓWIĄ NASI KLIENCI
      </h2>
      <div className='w-10 h-1 bg-[#cdb171] my-10 mx-auto'></div>
      <div className='bg-white w-9/12 mx-auto'>
        <MySlider items={testimonials} state={state} />
      </div>
    </div>
  );
}
