import React from "react";
import { TCard } from "../types";


interface IWhyCard {
  card:TCard
}


export default function WhyCard({card}: IWhyCard) {
  return (
    <div className='flex flex-col justify-center items-center py-10 px-20 gap-10'>
     <img src={card.src} alt="" />
     <p>{card.text}</p>
    </div>
  );
}
