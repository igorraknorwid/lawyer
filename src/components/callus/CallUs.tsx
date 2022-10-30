import React from "react";

interface IText {
  id: number;
  paragraph: string;
}

interface ICallUs {
  title: string;
  src: string;
  content: IText[];
}

export default function CallUs({ title, src, content }: ICallUs) {
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
    <div>
      <div className='w-11/12 lg:w-9/12 m-auto lg:flex lg:gap-x-20'>
        <div className='basis-2/3'>
          <h2 className='text-3xl lg:text-6xl text-center mb-10'>{title}</h2>
          <div className='lg:text-lg'>
            {content.map((item, index) => (
              <p className={index !== 0 ? "mt-5" :""} key={index}>
                {item.paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className='basis-1/3'>
          <div style={{ height: "1px" }} ref={topRef}></div>
          <img src={state ? src : ""} alt='image' />
          <div style={{ height: "1px" }} ref={bottomRef}></div>
        </div>
      </div>
    </div>
  );
}
