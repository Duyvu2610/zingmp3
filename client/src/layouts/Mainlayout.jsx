import React from "react";
import Header from "../components/Header";
import PlayerControl from "../components/PlayerControl";
import Sidebar from "../components/Sidebar";

function Mainlayout({ children }) {
  return (
    <>
      <div className="flex h-sidebar-h text-white">
        <Sidebar />
        <Header />
        <div className="flex-1 bg-layout-bg mt-header ml-sidebar-w-mobile lg:ml-sidebar-w-pc px-[30px] lg:px-[70px]">
          <div className="relative  ">{children}</div>
        </div>
      </div>
      <div className="bg-player-control-bg h-[90px] fixed bottom-0 right-0 left-0 z-[999999]">
        <PlayerControl />
      </div>
    </>
  );
}

export default Mainlayout;
