import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = ({ pageName }) => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerLeftContainer">
          <Link style={{ textDecoration: "none" }} to={"/home"}>
            <h1>GOK Stream</h1>
          </Link>
        </div>
        <div className="headerRightContainer">
          <div className="headerRightNavigatorItem">
            <Link style={{ textDecoration: "none" }} to={"/home"}>
              <h3>Home</h3>
            </Link>
          </div>
          <div className="headerRightNavigatorItem">
            <Link style={{ textDecoration: "none" }} to={"/series"}>
              <h3>Series</h3>
            </Link>
          </div>
          <div className="headerRightNavigatorItem">
            <Link style={{ textDecoration: "none" }} to={"/movies"}>
              <h3>Movies</h3>
            </Link>
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
