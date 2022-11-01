import React from "react";
import { cases } from "../content/cases";
import "../styles/burger.css";
import { CaseType} from "../types";

interface ILinkCildren {
  id: number;
  slug: string;
  title: string;
}

interface ILink {
  id: number;
  slug: string;
  title: string;
  children?: ILinkCildren[];
  open?: false;
}

interface IMenu {
  links: ILink[];
  cases: CaseType[]
  
}

function Menu({ links,cases }: IMenu) {
  const [state, setState] = React.useState(false);
  return (
    <ul className='topmenu topmenu_text text-white text-xl xl:text-2xl'>
      {links.map((link, index) => {
        return (
          <li className='topmenu_item' key={link.id}>
            <div className='topmenu_div flex justify-start items-center'>
              <div
                className={`topmenu_target w-2 h-8 ${
                  index === 0 ? "bg-blue-500" : "bg-transparent"
                } `}
              ></div>
              <div className='pl-10'>
                {index === 0 ? (
                  <a href='/'>Witam</a>
                ) : (
                  <a href={`/${link.slug}/`}>{link.title}</a>
                )}
              </div>
            </div>
          </li>
        );
      })}
      <li
        onClick={() => {
          setState((s) => !s);
        }}
        className='topmenu_item'
      >
        <div className='topmenu_div flex justify-start items-center'>
          <div className={`topmenu_target w-2 h-8 `}></div>

          <div className='pl-10 cursor-pointer flex justify-center items-center gap-x-5'><p>Zakres Usług</p> {state?<i className="arrow topmenu up"></i>:<i className="arrow topmenu down"></i>}</div>

        </div>
      </li>
      {state && (
        <>
          {cases.map(({attributes}) => {
            return (
              <li className='topmenu_item lowercase' key={attributes.id}>
                <div className='topmenu_div flex justify-start items-center'>
                  <div className={`topmenu_target w-6 h-8 `}></div>
                  <div className='pl-10 text-lg'>
                    <a href={`/${attributes.slug}/`}>{attributes.title}</a>
                  </div>
                </div>
              </li>
            );
          })}
        </>
      )}
    </ul>
  );
}

interface ITopNavbar {
  links: ILink[];
  cases: CaseType[]
}

export default function TopNavbar({ links,cases }: ITopNavbar) {
  const [state, setState] = React.useState(false);
  const [init, setInit] = React.useState(true);
  React.useEffect(() => {
    if (state) {
      document.body.classList.add("ex2");
    } else {
      document.body.classList.remove("ex2");
    }
  }, [state]);
  return (
    <div className=''>
      <div
        className={`fixed lg:top-5 z-20 w-[50px] lg:w-[150px] h-[50px] lg:h-[150px] right-0 bg-cyan-900 flex justify-center items-center ${
          state ? "bg-cyan-400" : "bg-[#0e1c39]"
        }`}
      >
        <div
          className={state ? "burger-btn active" : "burger-btn"}
          onClick={() => {
            if (init) {
              setInit(false);
            }
            setState(!state);
          }}
        >
          <span></span>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 xl:top-0  z-10 w-[80%] xl:w-[30%] bg-[#0e1c39] pt-[90px]   xl:pt-[150px] pb-10 xl:pb-20  ${
          state
            ? "translate-x-0 transition-all duration-700"
            : "translate-x-full transition-all duration-700"
        } `}
      >
        <Menu links={links} cases={cases} />
      </div>
    </div>
  );
}
