import React from "react";
import { BiCloud, BiError } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <div className="container h-screen mx-auto py-5 flex gap-5">
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
              <div className="ic p-2 rounded-xl flex flex-col items-center hover:bg-slate-500">
                <BiError size={"2rem"} />
                <p className="text-sm font-semibold ">Report</p>
              </div>
            </div>
          </div>
        </div>
        <div className="kotak w-full flex flex-col gap-5 flex-1 ">
          <div className="content card flex-3 h-full bg-transparent box-content ">
            <div className="card-body relative">
              <input
                type="text"
                placeholder="search..."
                className="w-full h-10 bg-base-200 shadow-xl px-5 flex justify-center absolute top-0 right-0 rounded-xl"
              />
            </div>
          </div>
          <div className="content card flex-2 h-full bg-slate-700 shadow-xl box-content ">
            <div className="card-body"></div>
          </div>
          <div className="content card flex-2 h-full bg-slate-700 shadow-xl box-content ">
            <div className="card-body"></div>
          </div>
        </div>
        <div className="card w-96 bg-slate-700 shadow-xl flex-3">
          <div className="card-body">
            <h2 className="card-title">sidebar 2</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
