import React from "react";
import { ITestimonial } from "../../types";
import InsideTestimonials from "./InsideTestimonials";

interface IMyTestimonial {
    testimonials:ITestimonial[]
}


export default function Testimonial({testimonials}: IMyTestimonial) {
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
    <section >
      <div style={{ height: "1px" }} ref={topRef}></div>
         <InsideTestimonials state={state} testimonials={testimonials} />
      <div style={{ height: "1px" }} ref={bottomRef}></div>
    </section>
  );
}
