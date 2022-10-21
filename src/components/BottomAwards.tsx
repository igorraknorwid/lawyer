import React from "react";
import InsideBottopAwards from "./InsideBottopAwards";
import { TAward } from "../types";

interface IBottopAwards {
  cards?: TAward[];
}

export default function BottomAwards({ cards }: IBottopAwards) {
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
    <section>
      <div
        style={{ height: "1px" }}
        className='bg-slate-300'
        ref={topRef}
      ></div>
      {state ? (
        <div
          className='relative  '
          style={{
            background: `url( "https://res.cloudinary.com/zielona-g-ra/image/upload/v1665738394/award_eir6lp.webp") no-repeat center/cover`,
          }}
        >
          <InsideBottopAwards cards={cards} />
        </div>
      ) : (
        <div className='relative h-[600px] w-full '>
          <InsideBottopAwards cards={cards} />
        </div>
      )}
      <div style={{ height: "1px" }} ref={bottomRef}></div>
    </section>
  );
}
