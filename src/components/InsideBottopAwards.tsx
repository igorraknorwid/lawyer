import React from "react";
import { TAward } from "../types";
import BottomAwardsCard from "./BottomAwardsCard";

interface IInsideBottopAwards {
  cards?: TAward[];
}

export default function InsideBottopAwards({ cards }: IInsideBottopAwards) {
  return (
    <div className=' w-11/12 xl:w-10/12  m-auto py-24'>
      <h2 className='text-3xl  lg:text-6xl  lg:pt-0 text-center'>
        NAGRODZANI ADWOKATCY PRAWA RODZINNEGO
      </h2>
      <div className='w-10 h-1 bg-[#cdb171] my-10 mx-auto'></div>
      <p className='text-center mb-10 xl:text-xl text-black'>
        Najważniejsze jest to, że jesteśmy nagradzanymi prawnikami, którzy są
        gotowi do prowadzenia postępowania sądowego w Twoim imieniu. Jako
        prawnicy zajmujący się prawem rodzinnym będziemy walczyć o osiągnięcie
        pożądanego rezultatu i chronić Twoją rodzinę w tym procesie rozwodowem.
        Zadzwoń do nas już dziś, aby umówić się na bezpłatną ocenę przypadku i
        dowiedzieć się więcej.
      </p>
      <ul className='flex justify-between mt-20 '>
        {cards.map((card) => (
          <li key={card.id}>
            <BottomAwardsCard card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
}
