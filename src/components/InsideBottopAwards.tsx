import React from "react";
import { TAward } from "../types";
import BottomAwardsCard from "./BottomAwardsCard";

interface IInsideBottopAwards {
  cards?: TAward[];
}

export default function InsideBottopAwards({ cards }: IInsideBottopAwards) {
  return (
    <div className='absolute top-24 w-11/12 left-0 right-0 m-auto'>
      <h2 className='text-6xl pt-8 xl:pt-0'>
        NAGRODZANI ADWOKATCY PRAWA RODZINNEGO
      </h2>
      <div className='w-10 h-1 bg-[#cdb171] my-10'></div>
      <p className='text-center mb-10 text-xl text-black'>
        Najważniejsze jest to, że jesteśmy nagradzanymi prawnikami, którzy są
        gotowi do prowadzenia postępowania sądowego w Twoim imieniu. Jako
        prawnicy zajmujący się prawem rodzinnym będziemy walczyć o osiągnięcie
        pożądanego rezultatu i chronić Twoją rodzinę w tym procesie. Zadzwoń do
        nas już dziś, aby umówić się na bezpłatną ocenę przypadku i dowiedzieć
        się więcej.
      </p>
      <ul className='xl:flex justify-between '>
        {cards.map((card) => (
          <li key={card.id}>
            <BottomAwardsCard card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
}
