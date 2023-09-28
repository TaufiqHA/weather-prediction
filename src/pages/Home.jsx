import React from "react";
//components
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";
import WeeklyForecast from "../components/WeeklyForecast";
import ModalBox from "../components/ModalBox";

const Home = () => {
  return (
    <>
      <div className="container h-screen mx-auto py-5 flex gap-5">
        <ModalBox />
        <Sidebar />
        <MainSection />
        <WeeklyForecast />
      </div>
    </>
  );
};

export default Home;
