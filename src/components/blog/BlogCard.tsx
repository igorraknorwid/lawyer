import React from "react";
import MyMarkdown from "../ui/MyMarkdown";

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
    <div
      className={`${
        index === 0 ? "col-span-full" : ""
      } flex flex-col my-border`}
    >
      <div style={{ height: "1px" }} ref={topRef}></div>
      <div className=''>
        <a href={`/blog/${slug}/`}>
          <img className='w-full' src={state ? image : " "} alt={title} />
        </a>
      </div>
      <div className='mt-5 p-5'>
        <a href={`/blog/${slug}/`} className='uppercase cursor-pointer'>
          <p className='text-3xl hover:text-blue-700 transition-all'>{title}</p>
        </a>
        <div className='mt-2'>
          <MyMarkdown content={short} />
        </div>
        <a href={`/blog/${slug}/`} className='uppercase cursor-pointer'>
          <div className='mt-2 text-slate-600 hover:text-blue-700 transition-all'>
            Czytaj dalej
          </div>
        </a>
        <div style={{ height: "1px" }} ref={bottomRef}></div>
      </div>
    </div>
  );
}
