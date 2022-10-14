import React from "react";
import { TCard } from "../types";
import WhyCard from "./WhyCard";

interface IInsideWhy {
  cards: TCard[];
}

export default function InsideWhy({ cards }: IInsideWhy) {
  return (
    <div className='absolute top-24 w-8/12 left-0 right-0 m-auto text-center text-white '>
      <div className='text-6xl '>
        DLACZEGO NALEŻY WYNAJMOWAĆ BERENJI I WSPÓŁPRACOWNIKÓW DO PROWADZENIA
        MOJEGO ROZWODU?
      </div>
      <div className='w-10 h-1 bg-white my-10'></div>
      <p className='text-center mb-20 text-xl text-black'>
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
      <div className='grid xl:grid-cols-3 gap-4'>
        {cards.map((card, index) => (
          <WhyCard card={card} />
        ))}
      </div>
    </div>
  );
}
