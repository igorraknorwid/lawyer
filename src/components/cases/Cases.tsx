import { TCase } from "../../types";
import React from "react";

interface ICases {
  cases: TCase[];
}

interface ICase {
  c: TCase;
  closeModal(e: any): void;
}

function CasesModal({ c, closeModal }: ICase) {
  return (
    <div
      onClick={(e) => {
        closeModal(e);
      }}
      className='myclose fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/80'
    >
      <div className='bg-blue-600 text-xl text-white w-11/12 xl:w-1/2 mx-auto px-10 py-5 '>
        <div className='flex justify-end items-center'>
          <button onClick={closeModal} className='myclose text-center'>
            ❌
          </button>
        </div>
        <h3 className='mb-5 lg:text-3xl text-center uppercase'>{c.title}</h3>
        <p className='mb-5'>{c.text}</p>
        <div className='flex justify-center items-center'>
          <button className=' border py-2 px-3 tracking-widest'>
            <a className='uppercase'>More</a>
          </button>
        </div>
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
  const closeModal = (e: any) => {
    const arr = e.target.className.split(" ");
    const myclose = arr.find((el) => el === "myclose");
    if (myclose) {
      setModal(false);
    }
  };
  const openModal = (c: TCase) => {
    setModal(true);
    setState(c);
  };

  return (
    <div className=' w-11/12 xl:w-8/12 m-auto'>
      {isModal && (
        <CasesModal
          c={state}
          closeModal={(e) => {
            closeModal(e);
          }}
        />
      )}
      <ul className='grid grid-cols-1  xl:grid-cols-4 xl:gap-x-8 gap-y-12'>
        {cases.map((c) => (
          <li key={c.id} className='bg-white text-black py-10'>
            <div className='flex flex-col justify-center items-center'>
              <h3 className='text-xl text-center p-5'>{c.title}</h3>
              <button
                className='text-3xl cursor-pointer'
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
