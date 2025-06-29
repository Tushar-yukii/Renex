import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Animedetail from "./detailpage/Animedetail";
import Popular from "./components/Popular";
const App = () => {
  return (
    <>
      <Popular />
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/:id" element={<Home />} />
          <Route path="/" element={<Home />} />

          <Route path="/anime/:id" element={<Animedetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
