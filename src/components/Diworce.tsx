import React from "react";
import { TAward } from "../types";

interface IDivorce {
  image_src: string;
  image_alt: string;
}

export default function Divorce({ image_src, image_alt }: IDivorce) {
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
    const bottomObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setState(true);
      }
    });
    if (topRef.current) {
      observer.observe(topRef.current);
    }
    if (bottomRef.current) {
      bottomObserver.observe(bottomRef.current);
    }
  }, []);

  return (
    <section className='xl:py-24 xl:w-10/12 m-auto'>
      <div style={{ height: "1px" }} ref={topRef}></div>
      <h2 className='text-6xl pt-8 xl:pt-0'>
        NASI PRAWNICY ROZWODNI Z LOS ANGELES ZAPEWNIAJĄ DOSTOSOWANĄ
        REPREZENTACJĘ
      </h2>
      <div className='w-10 h-1 bg-[#cdb171] my-10'></div>
      <div className='xl:flex mb-10'>
        <div className=''>
          <div className='text-2xl xl:max-w-3xl'>
            <p className='mb-5'>
              Żadne dwie rodziny nie są takie same. Z kolei nie ma dwóch
              identycznych rozwodów. Niektóre rodziny mogą być w stanie dość
              polubownie wypracować warunki umowy z niewielką pomocą swoich
              prawników. Inni mogą nie być w stanie spojrzeć w oczy i będą
              musieli użyć pełnej siły systemu prawnego, aby rozwiązać swój
              spór. Ważne jest, aby Twój adwokat to rozpoznał i dostosował się
              do unikalnych potrzeb Twojej indywidualnej sprawy.
            </p>
            <p className='mb-5'>
              W kancelarii nasi prawnicy rozumieją to i starają się dostosować
              naszą reprezentację prawną do Twoich konkretnych potrzeb i
              pragnień. Kładziemy duży nacisk na określenie Twoich priorytetów i
              opracowanie strategii, która będzie dla Ciebie najlepsza. Jesteśmy
              w stanie dostosować naszą reprezentację prawną do Twoich potrzeb,
              aktywnie wsłuchując się w Twoje potrzeby i osobiście prowadząc
              Twoją sprawę w czasie jej trwania..
            </p>
            <p>
              W przeciwieństwie do wielu innych kancelarii rozwodowych nasi
              adwokaci osobiście zajmą się wszystkimi aspektami Twojej sprawy i
              będą ją nadzorować. Jesteśmy w pełni zaangażowani w Twój spór
              dotyczący prawa rodzinnego i doprowadzimy go do końca. Kiedy
              zatrudnisz naszych doświadczonych prawników rozwodowych, nie
              będziesz musiał się martwić, że Twoja sprawa zostanie przekazana
              niedoświadczonym prawnikom lub personelowi pomocy prawnej.
              Będziesz mieć doświadczonego prawnika zajmującego się Twoją sprawą
              od początku do końca.
            </p>
          </div>
        </div>
        <div>
          <img
            style={{ objectPosition: "center", objectFit: "cover" }}
            className=''
            src={state ? image_src : ""}
            alt={image_alt}
          />
        </div>
      </div>
      <div className='flex justify-center'>
        <a className='text-center uppercase xl:text-[2vh] py-4 px-8 bg-[#d8380d] hover:bg-yellow-400 hover:text-gray-800 cursor-pointer max-w-max mx-auto'>
          skontaktuj się z nami
        </a>
      </div>
      <div style={{ height: "1px" }} ref={bottomRef}></div>
    </section>
  );
}
