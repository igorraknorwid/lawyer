import React from "react";
import { TAward } from "../types";

interface ILawyer {
  image_src: string;
  image_alt: string;
}

export default function Lawyer({ image_src, image_alt }: ILawyer) {
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
    <section className='xl:py-24 w-11/12 xl:w-10/12 m-auto'>
      <div style={{ height: "1px" }} ref={topRef}></div>
      <div className='xl:flex'>
        <img
          style={{ objectPosition: "center", objectFit: "cover" }}
          className=''
          src={state ? image_src : ""}
          alt={image_alt}
        />
        <div className='xl:pl-24'>
          <h1 className='text-6xl pt-8 xl:pt-0'>GDAŃSKI PRAWNIK ROZWODOWY</h1>
          <div className='w-10 h-1 bg-[#cdb171] my-10'></div>
          <div className='text-2xl xl:max-w-3xl'>
            <p className='mb-5'>
              W kancelarii nasi prawnicy zajmujący się rozwodami w Gdańsku
              rozumieją, że spór prawny z rodziną jest prawdopodobnie
              najtrudniejszym wyzwaniem, z jakim kiedykolwiek będziesz musiał
              się zmierzyć. Emocje są wysokie, co może utrudniać podejmowanie
              świadomych i racjonalnych decyzji dotyczących przyszłości. Jeśli
              decyzje te mają wpływ na dzieci, stawka może być jeszcze
              wyższa.Rozwód jest okolicznością kończącą małżeństwo. Zatrudnienie
              doświadczonego prawnika zajmującego się prawem rodzinnym, który
              pomoże Ci przejść przez te trudne czasy, pomoże Ci zapewnić
              najlepszy wynik dla Ciebie i Twoich bliskich.
            </p>
            <p className='mb-5'>
              W kancelarii mamy ponad dwie dekady doświadczenia w prowadzeniu
              najbardziej skomplikowanych spraw z zakresu prawa rodzinnego w Los
              Angeles. Agresywnie bronimy interesów naszych klientów i walczymy
              o jak najlepsze rezultaty w delikatnych sprawach, którymi się
              zajmujemy. Takie podejście pozwala nam konsekwentnie zabezpieczać
              wielomilionowe rozliczenia majątkowe, korzystne decyzje dotyczące
              opieki nad dziećmi oraz hojne nakazy alimentów i alimentów dla
              naszych klientów.
            </p>
            <p>
              Rozwód jest ciężkim przeżyciem dla wszystkich stron. Jeśli zmagasz
              się ze sporem dotyczącym prawa rodzinnego, ważne jest, abyś
              zrozumiał wszystkie dostępne opcje prawne. Zadzwoń do firmy, aby
              umówić się na bezpłatną ocenę sprawy. Wysłuchamy Twojej historii i
              potrzeb, ustalimy najlepszą strategię prawną dla Twojej konkretnej
              sytuacji i dołożymy wszelkich starań, aby odpowiedzieć na wszelkie
              Twoje pytania. Rozwód Gdańsk.
            </p>
          </div>
        </div>
      </div>
      <div style={{ height: "1px" }} ref={bottomRef}></div>
    </section>
  );
}
