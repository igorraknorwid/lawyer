import React from "react";
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
}

function Menu({ links }: IMenu) {
  const [state, setState] = React.useState(0);
  return (
    <ul className='topmenu text-white text-xl xl:text-3xl'>
      {links.map((link, index) => (
        <li className='topmenu_item' key={link.id}>
          <div className='topmenu_div flex justify-start items-center'>
            <div
              className={`topmenu_target w-2 h-8 ${
                index === 0 ? "bg-sky-500" : "bg-transparent"
              } `}
            ></div>
            <div className='pl-10'>
              <a href={link.slug}>{link.title}</a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

interface ITopNavbar {
  links: ILink[];
}

export default function TopNavbar({ links }: ITopNavbar) {
  const [state, setState] = React.useState(false);
  const [init, setInit] = React.useState(true);
  return (
    <div className=''>
      <div
        className={`absolute xl:top-5 z-20 w-[90px] lg:w-[180px] h-[90px] lg:h-[180px] right-0 bg-cyan-900 flex justify-center items-center ${
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
