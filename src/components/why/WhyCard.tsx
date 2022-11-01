import React from "react";
import { CardType} from "../../types";

interface IWhyCard {
  card: CardType;
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
    <>
      <div style={{ height: "1px" }} ref={topRef}></div>
      <img
        src={state ? card.attributes.src : ""}
        alt='icon'
        className=' max-h-5   lg:max-h-11'
      />
      <p className='text-black'>{card.attributes.text}</p>
      <div style={{ height: "1px" }} ref={bottomRef}></div>
    </>
  );
}
