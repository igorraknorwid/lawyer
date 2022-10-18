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
    <div className='w-11/12 lg:w-8/12 m-auto lg:flex'>
      <div>
        <h1 className='text-3xl lg:text-6xl'>{title}</h1>
        <div>
          {content.map((item, index) => (
            <p key={index}>{item.paragraph}</p>
          ))}
        </div>
      </div>
      <div>
        <img src={src} alt='image' />
      </div>
    </div>
  );
}
