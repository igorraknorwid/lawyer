import React from "react";
import { TCard } from "../types";

interface IWhyCard {
  card: TCard;
}

export default function WhyCard({ card }: IWhyCard) {
  return (
    <div className='flex flex-col justify-center items-center py-10 px-20 gap-10 bg-white'>
      <img src={card.src} alt='' className='max-h-11' />
      <p className='text-black'>{card.text}</p>
    </div>
  );
}
