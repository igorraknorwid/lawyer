import React from "react";






export default function Test(){
    React.useEffect(()=>{
        window.addEventListener('load', (event) => {
            console.log('Страница загружена')})
        console.log("hello")
    },[])
    
    return <div>TEST</div>
}