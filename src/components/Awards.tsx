import React from "react";
import { TAward } from "../types";

interface IAward {
  images: TAward[];
}

export default function Awards({ images }: IAward) {
  const [state, setState] = React.useState(false);

  const nextRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setState(true);
      }
    });
    if (nextRef.current) {
      observer.observe(nextRef.current);
    }
  }, []);

  return (
    <section className='py-8 xl:py-20 px-2 xl:px-40 bg-[#f6f4f5]'>
      <div style={{ height: "1px" }} ref={nextRef}></div>
      <ul className='flex justify-between items-center gap-x-10'>
        {images.map((img, index) => (
          <li key={index}>
            <img
              className='xl:max-h-32'
              src={state ? img.src : ""}
              alt='award'
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
