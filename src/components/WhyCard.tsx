import React from "react";
import { TCard } from "../types";

interface IWhyCard {
  card: TCard;
}

export default function WhyCard({ card }: IWhyCard) {
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
    <div className='flex flex-col justify-center items-center py-10 px-20 gap-10 bg-white'>
      <div style={{ height: "1px" }} ref={topRef}></div>
      <img src={state ? card.src : ""} alt='icon' className='max-h-11' />
      <p className='text-black'>{card.text}</p>
      <div style={{ height: "1px" }} ref={bottomRef}></div>
    </div>
  );
}
