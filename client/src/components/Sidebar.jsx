import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo-dark.svg";
import logoMini from "../assets/images/logo_mini.svg";
import live from "../assets/images/live.svg";
import { Link } from "react-router-dom";
import {
  Personal,
  Discover,
  Chart,
  Radio,
  Follow,
  NewMusic,
  Category,
  Top100,
  MV,
} from "../assets/icons/icons";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs";
import useViewport from "../hooks/useViewPort";
function Sidebar() {
  const navbar = [
    {
      name: "Cá Nhân",
      icon: <Personal />,
      isIcon: true,
      id: 1,
    },
    {
      name: "Khám Phá",
      icon: <Discover />,
      id: 2,
    },
    {
      name: "#zingchart",
      icon: <Chart />,
      isIcon: true,
      id: 3,
    },
    {
      name: "Radio",
      icon: <Radio />,
      isLive: true,
      isIcon: true,
      id: 4,
    },
    {
      name: "Theo Dõi",
      icon: <Follow />,
      id: 5,
    },
  ];
  const navbar2 = [
    {
      name: "Nhạc Mới",
      icon: <NewMusic />,
      isIcon: true,
      id: 6,
    },
    {
      name: "Thể loại",
      icon: <Category />,
      id: 7,
    },
    {
      name: "Top 100",
      icon: <Top100 />,
      id: 8,
    },
    {
      name: "MV",
      icon: <MV />,
      id: 9,
    },
  ];
  const [select, setSelect] = useState(2);
  const viewPort = useViewport();
  const handleClick = (e) => {
    console.log(e);
    setSelect(e);
  };
  return (
    <aside className=" bg-sidebar-bg flex flex-col w-[70px] lg:w-60 pt-[70px] pb-14 fixed top-0 bottom-[90px] left-0 ">
      <div className="">
        <nav className="">
          <div className="lg:w-60 h-[70px] w-[70px] fixed top-0 lg:pl-7 lg:pr-6  flex items-center justify-center lg:justify-start">
            <div
              className="lg:w-[65%] w-[45px] h-[45px] lg:h-1/2 bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${viewPort < 1024 ? logoMini : logo})`,
              }}
            ></div>
          </div>
        </nav>
        <nav className="mb-4">
          <ul>
            {navbar.map((e) => (
              <li
                className={`font-bold text-navigation-text lg:border-l-[3px]  ${
                  e.id === select
                    ? "bg-[#3f3f3f] border-[#9b4de0] text-white"
                    : "border-transparent"
                }`}
                onClick={() => handleClick(e.id)}
                key={e.id}
              >
                <Link className="group flex items-center text-sm lg:px-6 lg:py-2 py-4 hover:text-white justify-center lg:justify-start">
                  {e.icon}
                  <span className="ml-[10px] hidden lg:block">{e.name}</span>
                  {e.isLive && (
                    <img
                      src={live}
                      alt="logo"
                      className="ml-2 hidden lg:block"
                    />
                  )}
                  {e.isIcon && (
                    <BsPlayCircle
                      size={18}
                      className="ml-auto  lg:group-hover:block hidden "
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="h-[1px] relative after:content-[''] after:border-t-2 after:border-border-primary after:absolute after:left-6 after:right-6 after:top-0"></div>

        <div className=" overflow-x-hidden overflow-y-scroll w-full max-h-[500px]">
          <nav className="mt-4">
            <ul>
              {navbar2.map((e) => (
                <li
                  className={`font-bold text-navigation-text lg:border-l-[3px]  ${
                    e.id === select
                      ? "bg-[#3f3f3f] border-[#9b4de0] text-white"
                      : "border-transparent"
                  }`}
                  onClick={() => handleClick(e.id)}
                  key={e.id}
                >
                  <Link className="group flex items-center text-sm lg:px-6 lg:py-2 py-4 hover:text-white justify-center lg:justify-start">
                    {e.icon}
                    <span className="ml-[10px] hidden lg:block">{e.name}</span>
                    {e.isIcon && (
                      <BsPlayCircle
                        size={18}
                        className="ml-auto lg:group-hover:block hidden"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="my-[10px] mx-[20px] px-2 py-4 rounded-md text-center bg-gradient-to-r from-[#5a4be7] to-[#c86dd7] hidden lg:block">
            <div className="text-xs font-bold mb-4">
              Nghe nhạc không quản cáo
              <br /> cùng kho nhạc VIP
            </div>
            <a
              href="/"
              className="bg-[#ffdb00] text-black px-9 py-2 font-semibold text-xs rounded-lg"
            >
              NÂNG CẤP VIP
            </a>
          </div>
        </div>

        <button className="fixed w-60 left-0 h-[54px] border-t border-border-primary py-7  items-center font-bold  text-base pl-6 hidden lg:flex bottom-[90px]">
          <AiOutlinePlus size={18} />
          <span className="ml-2">Tạo playlist mới</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
