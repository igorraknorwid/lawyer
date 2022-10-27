import React from "react";
import ReactMarkdown from "react-markdown";
import { AboutData } from "../../types";

interface IOnas {
  about: AboutData;
}

export default function Onas({ about }: IOnas) {
  return (
    <div className='py-24'>
      <div>O NAS</div>
      {/* <div className='markdown'>{about.data.attributes.about}</div> */}
      <div className='markdown'>
        <ReactMarkdown children={about.data.attributes.about} />
      </div>
    </div>
  );
}
