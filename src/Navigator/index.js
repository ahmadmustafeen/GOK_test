import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../container/Home";

const Navigator = () => {
  return (
      <Home />
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" component={Home} />
    // </Routes>
    // </BrowserRouter>
  );
};

export default Navigator;
