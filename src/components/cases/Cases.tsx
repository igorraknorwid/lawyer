import { TCase } from "../../types";
import React from "react";
interface ICases {
  cases: TCase[];
}

function CasesModal({ title, text }: TCase) {
  const [isModal, setModal] = React.useState(false);
  const [state, setState] = React.useState({} as TCase);
  return (
    <div className='absolute top-0 bottom-0 left-0 flex justify-center items-center '>
      <div className='bg-blue-600 text-xl text-white '>
        <button>Close</button>
        <h3>{title}</h3>
        <p>{text}</p>
        <button>More</button>
      </div>
    </div>
  );
}

export default function Cases({ cases }: ICases) {
  return <div></div>;
}
