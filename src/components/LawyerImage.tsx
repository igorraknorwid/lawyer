import React from "react";
import { TAward } from "../types";

interface ILawyer {
  image_src: string;
  image_alt: string;
}

export default function LawyerImage({ image_src, image_alt }: ILawyer) {
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
    if (topRef.current) {
      observer.observe(topRef.current);
    }
    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }
  }, []);

  return (
    <>
      <div style={{ height: "1px" }} ref={topRef}></div>
      <div className='xl:flex'>
        <img
          style={{ objectPosition: "center", objectFit: "cover" }}
          src={state ? image_src : ""}
          alt={image_alt}
          height={864}
          width={546}
        />

        <div style={{ height: "1px" }} ref={bottomRef}></div>
      </div>
    </>
  );
}
