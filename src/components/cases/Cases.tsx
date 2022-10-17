import { TCase } from "../../types";
import React from "react";

interface ICases {
  cases: TCase[];
}

interface ICase {
  c: TCase;
  closeModal(): void;
}

function CasesModal({ c, closeModal }: ICase) {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-red-500 '>
      <div className='bg-blue-600 text-xl text-white'>
        <button onClick={closeModal}>CLOSE</button>
        <h3>{c.title}</h3>
        <p>{c.text}</p>
        <a>More</a>
      </div>
    </div>
  );
}

const Cases = ({ cases }: ICases) => {
  const [isModal, setModal] = React.useState(false);
  const [state, setState] = React.useState<TCase>({
    id: 100,
    text: "text",
    title: "title",
  });
  const closeModal = () => {
    setModal(false);
  };
  const openModal = (c: TCase) => {
    setModal(true);
    setState(c);
  };

  return (
    <div className=' w-11/12 xl:w-8/12 m-auto'>
      {isModal && <CasesModal c={state} closeModal={closeModal} />}
      <ul className='grid grid-cols-1  xl:grid-cols-4 xl:gap-x-8 gap-y-12'>
        {cases.map((c) => (
          <li key={c.id} className='bg-white text-black py-10'>
            <div className='flex flex-col justify-center items-center'>
              <h3 className='text-3xl'>{c.title}</h3>
              <button
                className='text-3xl'
                onClick={() => {
                  openModal(c);
                }}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cases;
