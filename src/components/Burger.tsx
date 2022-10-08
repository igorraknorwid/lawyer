import { useState } from "react";
import "../styles/burger.css";

export default function Burger() {
  const [state, setState] = useState(false);
  return (
  
    <div
    className={state ? "burger-btn active" : "burger-btn"}
    onClick={() => {
        setState(!state);
    }}
  >
    <span></span>
  </div>
  );
}
