import React from "react";
import { TCard } from "../../types";
import WhyCard from "./WhyCard";

interface IInsideWhy {
  cards: TCard[];
  isBackground: boolean;
}

export default function InsideWhy({ cards, isBackground }: IInsideWhy) {
  return (
    <div className='w-11/12  xl:w-8/12  m-auto text-center text-white '>
      <div
        className={`xl:text-6xl ${isBackground ? "text-white" : "text-black"}`}
      >
        DLACZEGO NALEŻY WYNAJMOWAĆ KANCELARJE PRAWNICZĄ DO PROWADZENIA MOJEGO
        ROZWODU?
      </div>
      <div className='w-10 h-1 bg-white my-10 mx-auto'></div>
      <p
        className={`  text-center mb-20 xl:text-2xl ${
          isBackground ? "text-white" : "text-black"
        }`}
      >
        Decyzje, które zmieniają lub zmieniają dynamikę Twojej rodziny, są
        trudne. Będziesz potrzebować adwokata po swojej stronie, który pomoże ci
        przejść przez te trudne czasy ze względną łatwością. Aby to zrobić, Twój
        prawnik musi być nie tylko dobrze zorientowany w polskim prawie
        rodzinnym i procedurze, ale także posiadać niezrównane umiejętności
        zarówno na sali sądowej, jak i poza nią. Innymi słowy, potrzebujesz
        adwokata, który jest twardym negocjatorem, ale także zaciekłym
        prawnikiem na sali sądowej. Wielu prawników to jeden lub drugi. W
        kancelarii nasi prawnicy wykazali się niesamowitymi umiejętnościami i
        sukcesami zarówno jako negocjatorzy, jak i arbitrzy.
      </p>
      <div className='grid grid-cols-2 xl:grid-cols-3 gap-4'>
        {cards.map((card, index) => (
          <div
            key={index}
            className='flex flex-col justify-center items-center gap-10 px-2 bg-white'
          >
            <WhyCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}
