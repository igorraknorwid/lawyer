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
  url_cuted_param?: string;
}

function Menu({ links, url_cuted_param }: IMenu) {
  const [state, setState] = React.useState(0);

  return (
    <ul className='topmenu text-white text-xl xl:text-3xl'>
      {links.map((link, index) => {
        if (url_cuted_param) {
          const isIncludes = url_cuted_param === link.slug + "/"; //It does not work locally

          return (
            <li className='topmenu_item' key={link.id}>
              <div className='topmenu_div flex justify-start items-center'>
                <div
                  className={`topmenu_target w-2 h-8 ${
                    isIncludes ? "bg-blue-500" : "bg-transparent"
                  } `}
                ></div>
                <div className='pl-10'>
                  {/* <a href='https://radca-test.pl/o-nas'>{link.title}</a> */}
                  {/* <div>{link.title}</div> */}
                  <a href='/o-nas/'>{link.title}</a>
                </div>
              </div>
            </li>
          );
        } else {
          return (
            <li className='topmenu_item' key={link.id}>
              <div className='topmenu_div flex justify-start items-center'>
                <div
                  className={`topmenu_target w-2 h-8 ${
                    index === 0 ? "bg-blue-500" : "bg-transparent"
                  } `}
                ></div>
                <div className='pl-10'>
                  {/* <a href={`/${link.slug}`}>{link.title}</a> */}
                  <a href='/o-nas/'>{link.title}</a>
                  {/* <a href='https://radca-test.pl/o-nas'>{link.title}</a> */}
                </div>
              </div>
            </li>
          );
        }
      })}
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
        <Menu links={links} url_cuted_param={url_cuted_param} />
      </div>
    </div>
  );
}
