// dependencies
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// styling
import "./index.css";
// pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
