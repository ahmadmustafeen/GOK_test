import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import "./style.css";

const NavigationTile = ({ title,navigateTo }:any) => {
  return (
    <div className="navigationTilesContainer">
    <Link to={navigateTo} style={{textDecoration:'none'}}>
      <div className="navigationTilesContainer-image" />
      <div className="navigationTilesContainer-title">
        <h2>{title}</h2>
      </div>
      </Link>
    </div>
  );
};

const tiles = [{title:"Popular Serial",navigateTo:'/series'},{title:"Popular Movies",navigateTo:'/movies'}];
const Home = () => {
  return (
    <div>
      <Header pageName="Home" />
      <div className="mainContainer">
      {
        tiles.map((item,index)=>{
            return (
                <NavigationTile title={item.title} key={index}
                navigateTo={item.navigateTo}/>
                 
            )
        })
      }
      </div>
      <Footer />
    </div>
  );
};

export default Home;
