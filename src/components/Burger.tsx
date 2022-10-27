import React from "react";
import { cases } from "../content/cases";
import "../styles/burger.css";

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
  // url_cuted_param?: string;
}

function Menu({ links }: IMenu) {
  const [state, setState] = React.useState(true);
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
          <div className='pl-10 cursor-pointer'>Zakres Usług</div>
        </div>
      </li>
      {state && (
        <>
          {cases.map((link) => {
            return (
              <li className=' topmenu_item lowercase' key={link.id}>
                <div className='topmenu_div flex justify-start items-center'>
                  <div className={`topmenu_target w-6 h-8 `}></div>
                  <div className='pl-10 text-lg'>
                    <a href={`/${link.slug}/`}>{link.title}</a>
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
  url_cuted_param?: string;
}

export default function TopNavbar({ links, url_cuted_param }: ITopNavbar) {
  const [state, setState] = React.useState(false);
  const [init, setInit] = React.useState(true);
  return (
    <div className=''>
      <div
        className={`fixed xl:top-5 z-20 w-[90px] lg:w-[180px] h-[90px] lg:h-[180px] right-0 bg-cyan-900 flex justify-center items-center ${
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
        className={`fixed top-0 right-0 xl:top-5  z-10 w-[80%] xl:w-[30%] bg-[#0e1c39] pt-[90px]   xl:pt-[180px] pb-10 xl:pb-20  ${
          state
            ? "translate-x-0 transition-all duration-700"
            : "translate-x-full transition-all duration-700"
        } `}
      >
        <Menu links={links} />
      </div>
    </div>
  );
}
