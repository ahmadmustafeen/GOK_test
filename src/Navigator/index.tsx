import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../container/Home";
import Movies from "../container/Movies";
import Series from "../container/Series";

const Navigator = () => {
  return (
    <Routes>
      <Route path="movies"  element={<Movies />} />
      <Route path="home" element={<Home />} />
      <Route path="series"  element={<Series />} />
      <Route
        path="*"
        element={<Navigate to="/home" replace />}
    />
    </Routes>
  );
};

export default Navigator;
