import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../container/Home";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/home" exact element={<Home />} />
    </Routes>
  );
};

export default Navigator;
