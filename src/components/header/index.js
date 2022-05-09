import React from "react";
import "./style.css";

const Header = ({ pageName }) => {
  return (
    <div className="header">
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
      <div className="headerPageNameContainer">
        <h3>{pageName}</h3>
      </div>
    </div>
  );
};

export default Header;
