import React from "react";

const WeeklyForecast = () => {
  return (
    <div className="card w-96 bg-slate-700 shadow-xl flex-3">
      <div className="card-body p-4">
        <h2 className="card-title text-sm">7-DAY FORECAST</h2>
        <div className="flex flex-col gap-7 mt-5 px-4">
          <div className="flex justify-between border-b pb-5 border-b-slate-600">
            <h2 className="card-title text-xs">Today</h2>
            <div className="flex">
              <img src="/image/icons/sun.png" alt="img" className="w-7 me-2 " />
              <p className="card-title text-xs">Sunny</p>
            </div>
            <h2 className="card-title text-xs">34/21</h2>
          </div>
          <div className="flex justify-between border-b pb-5 border-b-slate-600">
            <h2 className="card-title text-xs">Tue</h2>
            <div className="flex">
              <img
                src="/image/icons/sun-cloud.png"
                alt="img"
                className="w-7 me-2 "
              />
              <p className="card-title text-xs">Cloudy</p>
            </div>
            <h2 className="card-title text-xs">30/25</h2>
          </div>
          <div className="flex justify-between border-b pb-5 border-b-slate-600">
            <h2 className="card-title text-xs">Wed</h2>
            <div className="flex">
              <img
                src="/image/icons/sun-cloud.png"
                alt="img"
                className="w-7 me-2 "
              />
              <p className="card-title text-xs">Cloudy</p>
            </div>
            <h2 className="card-title text-xs">31/22</h2>
          </div>
          <div className="flex justify-between border-b pb-5 border-b-slate-600">
            <h2 className="card-title text-xs">Thu</h2>
            <div className="flex">
              <img
                src="/image/icons/sun-cloud.png"
                alt="img"
                className="w-7 me-2 "
              />
              <p className="card-title text-xs">Cloudy</p>
            </div>
            <h2 className="card-title text-xs">30/25</h2>
          </div>
          <div className="flex justify-between border-b pb-5 border-b-slate-600">
            <h2 className="card-title text-xs">Fri</h2>
            <div className="flex">
              <img src="/image/icons/sun.png" alt="img" className="w-7 me-2 " />
              <p className="card-title text-xs">Sunny</p>
            </div>
            <h2 className="card-title text-xs">34/21</h2>
          </div>
          <div className="flex justify-between border-b pb-5 border-b-slate-600">
            <h2 className="card-title text-xs">Sat</h2>
            <div className="flex">
              <img src="/image/icons/sun.png" alt="img" className="w-7 me-2 " />
              <p className="card-title text-xs">Sunny</p>
            </div>
            <h2 className="card-title text-xs">33/22</h2>
          </div>
          <div className="flex justify-between pb-5">
            <h2 className="card-title text-xs">Sun</h2>
            <div className="flex">
              <img
                src="/image/icons/rain.png"
                alt="img"
                className="w-7 me-2 "
              />
              <p className="card-title text-xs">Rainy</p>
            </div>
            <h2 className="card-title text-xs">28/19</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyForecast;
