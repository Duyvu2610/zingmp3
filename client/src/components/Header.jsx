import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Download } from "../assets/icons/icons";
import { RiVipLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { FcGlobe } from "react-icons/fc";
function Header() {
  const itemRight = [
    {
      icon: <FcGlobe size={20} />,
    },
    {
      icon: <RiVipLine size={20} />,
    },
    {
      icon: <FiSettings size={20} />,
    },
  ];
  return (
    <header className="flex items-center fixed top-0 right-0 h-[70px] left-[70px] lg:left-sidebar-w-pc px-[30px] bg-layout-bg lg:px-[70px]">
      {/* <div className="flex justify-center items-center">
        <AiOutlineArrowLeft size={24} className="mr-4" />
        <AiOutlineArrowRight size={24} className="mr-4" />
        <div className="flex rounded-full bg-[#353535] h-10 px-3 justify-center items-center text-[#646464]">
          <HiMagnifyingGlass size={22} className="mr-2" />
          <div className="h-full">
            <input
              className="w-80 h-full bg-inherit outline-none text-white "
              type="text"
              placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            />
          </div>
        </div>
      </div>
      <div className=""></div> */}
      <div className="relative w-full flex items-center justify-between">
        <div className="flex-1 mr-2 flex items-center justify-start">
          <AiOutlineArrowLeft size={24} className="mr-4" />
          <AiOutlineArrowRight size={24} className="mr-4" />
          <div className="relative w-full max-w-[440px]">
            <div className="h-10 rounded-full bg-[#ffffff1a] flex items-center">
              <button className="flex items-center">
                <HiMagnifyingGlass size={20} className="ml-2" />
              </button>
              <div className="absolute top-0 left-[38px] right-[10px] bottom-0">
                <input
                  type="text"
                  placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                  className="outline-none w-[95%] text-sm text-[#eee] h-full py-[5px] bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="text-link-text-hover mr-3 bg-[#ffffff1a] rounded-full relative flex py-[10px] px-6 items-center font-bold text-sm cursor-pointer">
            <Download className="mr-1" />
            <span>Tải bản Windows</span>
          </div>
          {itemRight.map((e, i) => (
            <div className="mr-3 " key={i}>
              <button className="w-10 h-10 rounded-full flex items-center bg-[#ffffff1a] justify-center text-[#d4d4d4]">
                {e.icon}
              </button>
            </div>
          ))}
          <div className="">
            <button className="w-10 h-10 rounded-full flex items-center bg-[#ffffff1a]"></button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
