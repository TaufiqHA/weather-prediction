import { BiCloud, BiError } from "react-icons/bi";
import React from "react";

const Sidebar = () => {
  return (
    <div className="card w-20 h-full bg-slate-700 shadow-xl box-content ">
      <div className="card-body px-4 py-3 flex flex-col items-center">
        <img
          src="/image/logo.png"
          alt="logo"
          className="h-12 bg-slate-500 rounded-2xl mb-10"
        />
        <div className="ic-squere flex flex-col gap-5 ">
          <div className="ic p-2 rounded-xl flex flex-col items-center hover:bg-slate-500">
            <BiCloud size={"2rem"} />
            <p className="text-sm font-semibold ">Weather</p>
          </div>
          <div
            className="ic p-2 rounded-xl flex flex-col items-center hover:bg-slate-500"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <BiError size={"2rem"} />
            <p className="text-sm font-semibold ">Report</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
