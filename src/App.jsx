import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Fetchapi from "./components/Fetchapi";
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Fetchapi />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;
