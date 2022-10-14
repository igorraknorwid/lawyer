import React from "react";
import { TAward } from "../types";
import InsideWhy from "./InsideWhy";
import { TCard } from "../types";

interface IWhy {
  cards: TCard[];
}

export default function Why({ cards }: IWhy) {
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
    <section>
      <div style={{ height: "1px" }} ref={topRef}></div>
      {state ? (
        <div
          className='relative h-[1500px] w-full '
          style={{
            background: `url( "https://res.cloudinary.com/zielona-g-ra/image/upload/v1665663718/why-bg_2_gbx6d5.webp") no-repeat center/cover`,
          }}
        >
          <InsideWhy cards={cards} />
        </div>
      ) : (
        <div className='relative h-[1500px] w-full '>
          <InsideWhy cards={cards} />
        </div>
      )}
    </section>
  );
}
