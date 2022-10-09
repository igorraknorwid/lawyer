import React from "react";
import "../styles/burger.css";



interface ILinkCildren{
    id:number;
    slug:string;
    title:string;
}

interface ILink{
    id:number;
    slug:string;
    title:string;
    children?:ILinkCildren[]
    open: false
}





function  Menu (links:ILink[]){

    return(
       <ul>
        {links.map(link=><li key={link.id}><a href={link.slug}>{link.title}</a></li>)}
       </ul>
    )
 
}


export default function TopNavbar(){
    const [state,setState] = React.useState(false); 
    return (
        <div >
            <div className = {`absolute z-20 w-[230px] h-[230px] right-0 top-10 bg-cyan-900 flex justify-center items-center ${state?"bg-cyan-400":"bg-[#0e1c39]"}`}>
                <div className={state ? "burger-btn active" : "burger-btn"}
                onClick={() => {setState(!state)}}>
                    <span></span> 
                </div>
            </div>
            
            <div className = {`absolute  top-10 z-10 xl:w-[500px] bg-[#0e1c39] pt-[230px] pb-10 px-10 hidden top_menu ${state?"active":"hide"} `}>              
                <ul className="text-white text-3xl">
                    <li className="mb-3">Witam</li>
                    <li className="mb-3">O nas</li>
                    <li className="">Kontakty</li>
                </ul>
            </div>
        </div>
    )
}