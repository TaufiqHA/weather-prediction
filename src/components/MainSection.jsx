import { BiWind } from "react-icons/bi";
import { CiTempHigh, CiDroplet, CiBrightnessUp } from "react-icons/ci";
import React from "react";

const MainSection = () => {
  return (
    <div className="kotak w-full flex flex-col gap-5 flex-1 ">
      <div className="content card flex-3 h-full bg-transparent box-content ">
        <div className="card-body relative">
          <input
            type="text"
            placeholder="search..."
            className="w-full h-10 bg-base-200 shadow-xl px-5 flex justify-center absolute top-0 right-0 rounded-xl"
          />
          <div className="desk mt-5 flex justify-between">
            <div className="city">
              <h2 className="text-2xl font-bold">Roma</h2>
              <p>Chance of rain: 50%</p>
              <h2 className="text-4xl font-bold mt-10">21°</h2>
            </div>
            <div className="images mt-5">
              <img src="/image/icons/rain.png" alt="img" className="w-32" />
            </div>
          </div>
        </div>
      </div>
      <div className="content card flex-2 h-full bg-slate-700 shadow-xl box-content ">
        <div className="card-body p-4">
          <h2 className="card-title text-sm">TODAY'S FORECAST</h2>
          <div className="mx-auto content flex ">
            <div className="flex flex-col items-center gap-3 px-7 border-l border-r border-slate-600 ">
              <h2 className="card-title text-sm">6:00 AM</h2>
              <img src="/image/icons/rain.png" alt="img" className="w-10" />
              <h2 className="card-title">20°</h2>
            </div>
            <div className="flex flex-col items-center gap-3 px-7 border-l border-r border-slate-600 ">
              <h2 className="card-title text-sm">9:00 AM</h2>
              <img
                src="/image/icons/sun-cloud.png"
                alt="img"
                className="w-10"
              />
              <h2 className="card-title">25°</h2>
            </div>
            <div className="flex flex-col items-center gap-3 px-7 border-l border-r border-slate-600">
              <h2 className="card-title text-sm">12:00 PM</h2>
              <img src="/image/icons/sun.png" alt="img" className="w-10" />
              <h2 className="card-title">30°</h2>
            </div>
            <div className="flex flex-col items-center gap-3 px-7 border-l border-r border-slate-600">
              <h2 className="card-title text-sm">3:00 PM</h2>
              <img src="/image/icons/sun.png" alt="img" className="w-10" />
              <h2 className="card-title">34°</h2>
            </div>
            <div className="flex flex-col items-center gap-3 px-7 border-l border-r border-slate-600">
              <h2 className="card-title text-sm">6:00 PM</h2>
              <img src="/image/icons/sun.png" alt="img" className="w-10" />
              <h2 className="card-title">29°</h2>
            </div>
            <div className="flex flex-col items-center gap-3 px-7 border-l border-r border-slate-600">
              <h2 className="card-title text-sm">9:00 PM</h2>
              <img
                src="/image/icons/sun-cloud.png"
                alt="img"
                className="w-10"
              />
              <h2 className="card-title">27°</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="content card flex-2 h-full bg-slate-700 shadow-xl box-content ">
        <div className="card-body p-4">
          <h2 className="card-title text-sm">AIR CONDITION</h2>
          <div className="h-full px-5 flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="flex">
                <CiTempHigh size={"2rem"} />
                <h2 className="card-title text-sm text-slate-400">Reel Feel</h2>
              </div>
              <div>
                <h2 className="card-title text-2xl">25°</h2>
              </div>
              <div></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex">
                <CiDroplet size={"2rem"} />
                <h2 className="card-title text-sm text-slate-400">
                  Chance of Rain
                </h2>
              </div>
              <div>
                <h2 className="card-title text-2xl">50%</h2>
              </div>
              <div></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex">
                <BiWind size={"2rem"} />
                <h2 className="card-title text-sm text-slate-400 ms-2">Wind</h2>
              </div>
              <div>
                <h2 className="card-title text-2xl">0.8 km/h</h2>
              </div>
              <div></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex">
                <CiBrightnessUp size={"2rem"} />
                <h2 className="card-title text-sm text-slate-400 ms-2">
                  UV Index
                </h2>
              </div>
              <div>
                <h2 className="card-title text-2xl">1</h2>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
