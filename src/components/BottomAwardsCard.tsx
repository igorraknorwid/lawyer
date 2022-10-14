import React from "react";
import { TAward } from "../types";

interface IWhyCard {
  card: TAward;
}

export default function BottomAwardsCard({ card }: IWhyCard) {
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
      <img className='award_img' src={state ? card.src : ""} alt={card.myalt} />
      <div style={{ height: "1px" }} ref={bottomRef}></div>
    </>
  );
}
