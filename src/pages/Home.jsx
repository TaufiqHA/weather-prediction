import React from "react";

const Home = () => {
  return (
    <>
      <div className="container h-screen mx-auto py-5 flex gap-5">
        <div className="card w-20 h-full bg-slate-700 shadow-xl box-content ">
          <div className="card-body"></div>
        </div>
        <div className="content card flex-1 h-full bg-slate-700 shadow-xl box-content ">
          <div className="card-body">
            <div className="card w-full h-10 bg-base-100 shadow-xl px-5 flex justify-center ">
              <h2>search...</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
