import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerLeftContainer">
        <h1>GOK Stream</h1>
      </div>
      <div className="headerRightContainer">
        <div className="headerRightNavigatorItem">
          <h3>Home</h3>
        </div>
        <div className="headerRightNavigatorItem">
          <h3>Series</h3>
        </div>
        <div className="headerRightNavigatorItem">
          <h3>Movies</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
