import { useState } from "react";

export default function Test() {
  const [state, setState] = useState(false);
  return (
    <div>
      {state ? <h1>Hello</h1> : <h1>By</h1>}
      <button
        onClick={() => {
          setState((s) => !s);
        }}
      >
        Switch
      </button>
    </div>
  );
}
