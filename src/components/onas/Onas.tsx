import React from "react";
import ReactMarkdown from "react-markdown";
import { AboutData } from "../../types";

interface IOnas {
  about: AboutData;
}

export default function Onas({ about }: IOnas) {
  return (
    <div className='px-4 py-12 w-full lg:w-9/12 mx-auto '>
       <h2 className='text-3xl xl:text-6xl xl:pt-0 text-center'>
       O NAS
      </h2>
      <div className='w-10 h-1 bg-[#cdb171] my-10 mx-auto'></div>
      <div className='markdown'>
        <ReactMarkdown children={about.data.attributes.about} />
      </div>
    </div>
  );
}
