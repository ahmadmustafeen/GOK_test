import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../container/Home";
import Movies from "../container/Movies";
import Series from "../container/Series";

const Navigator = () => {
  return (
    <Routes>
      <Route path="movies"  element={<Movies />} />
      <Route path="home" element={<Home />} />
      <Route path="series"  element={<Series />} />
    </Routes>
  );
};

export default Navigator;
