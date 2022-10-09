import React from "react";

const image_links =[
    {id:1, src:"https://res.cloudinary.com/du9w3xgvx/image/upload/v1665312789/lawyer/super_ivaxzt.webp", alt:"suver_lawyer"},
    {id:2, src:"https://res.cloudinary.com/du9w3xgvx/image/upload/v1665312783/lawyer/avvo_nrvy7h.webp", alt:"avvo"},
    {id:3, src:"https://res.cloudinary.com/du9w3xgvx/image/upload/v1665312779/lawyer/yelp_w3qrp1.webp", alt:"yelp"},
    {id:4, src:"https://res.cloudinary.com/du9w3xgvx/image/upload/v1665312772/lawyer/google_gepo67.webp", alt:"google_rewiews"},

]


export default function Awards () {
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
       {image_links.map(img=><li key={img.id}><img src={state?img.src:""} alt={img.alt}/></li>)}
    </ul>
    </section>
   )
}
