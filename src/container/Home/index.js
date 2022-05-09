import React from "react";
import Header from "../../components/header";
import "./style.css";

const NavigationTile = ({ title }) => {
  return (
    <div className="navigationTilesContainer">
      <div className="navigationTilesContainer-image" />
      <div className="navigationTilesContainer-title">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

const tiles = [{title:"Popular Serial"},{title:"Popular Movies"}];
const Home = () => {
  return (
    <div>
      <Header />
      <div className="mainContainer">
      {
        tiles.map((item,index)=>{
            return (
                <NavigationTile title={item.title} key={index} />
            )
        })
      }
      </div>
    </div>
  );
};

export default Home;
