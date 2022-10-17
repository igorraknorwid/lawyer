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
  return (
    <div className='w-11/12 xl:w-8/12 m-auto xl:flex'>
      <div>
        <h1 className=''>{title}</h1>
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
