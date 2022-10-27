import React from "react";

interface IBlogCard {
  index: number;
  image: string;
  slug: string;
  title: string;
  short: string;
}

export default function BlogCard({
  index,
  image,
  slug,
  title,
  short,
}: IBlogCard) {
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
    <li
      className={`${index === 0 ? "col-span-full" : ""} flex flex-col border `}
    >
      <div style={{ height: "1px" }} ref={topRef}></div>
      <img src={state ? image : " "} alt={title} />
      <div className='mt-5 p-5'>
        <a href={`/blog/${slug}/`} className='uppercase cursor-pointer'>
          <h3 className='text-3xl hover:text-blue-700 transition-all'>
            {title}
          </h3>
        </a>
        <div className='mt-2'>{short}</div>
        <a href={`/blog/${slug}/`} className='uppercase cursor-pointer'>
          <div className='mt-2 text-slate-600 hover:text-blue-700 transition-all'>
            Czytaj dalej
          </div>
        </a>
        <div style={{ height: "1px" }} ref={bottomRef}></div>
      </div>
    </li>
  );
}
