import React from "react";
import {TAward} from "../types"



interface IAward{
  images:TAward[]
}


export default function Awards ({images}:IAward) {
    const [state, setState] = React.useState(false);
   
    const nextRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if(entry.isIntersecting){setState(true)}
        
      });
      if (nextRef.current) {
        observer.observe(nextRef.current);
      }
    }, []);

   return(
    <section className="py-20 px-20">
         <div style={{height:"1px",backgroundColor:"red"}} ref={nextRef}></div>
    <ul className="flex justify-between items-center">
       {images.map(img=><li key={img.id}><img src={state?img.src:""} alt={img.alt}/></li>)}
    </ul>
    </section>
   )
}
