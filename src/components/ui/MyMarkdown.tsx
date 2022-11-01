import React from "react";
import ReactMarkdown from "react-markdown";
import { AboutData } from "../../types";

interface IMyMarkdown {
  content: string;
}

export default function MyMarkdown({ content}: IMyMarkdown) {
  return (   
      <div className='markdown'>
        <ReactMarkdown children={content} />
      </div>
 
  );
}