import React from "react";
import ReactMarkdown from "react-markdown";
import { AboutData } from "../../types";


interface IOnas{
    about:AboutData
}

export default function Onas({about}:IOnas) {
   
    return(
        <div className="py-24">
        <div>ONAS TEST</div>
        <div className="markdown">
            {about.data.attributes.about}
        </div>
        <ReactMarkdown className="markdown text-lg">{about.data.attributes.about}</ReactMarkdown>
        </div>
    )
}