import axios from "axios";
import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

import "./style.css";

const URL = "https://mumer01.github.io/publicApis/BoxOffice.json";
const NUMBER_OF_MOVIES = 25;
const fetchApiData = async () => {
  return axios
    .get(URL)
    .then((data) => {
      return data?.data?.entries;
    })
    .catch((err) => {
      throw err;
    });
};

const Movies = () => {
  const [movies, setMovies] = React.useState([]);
  const [displayData, setDisplayData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetchApiData()
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.log(err, "err");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  React.useEffect(() => {
    setDisplayData(movies.slice(0, NUMBER_OF_MOVIES));
  }, [movies]);
  return (
    <div className="moviesContainer">
      <Header pageName="Popular Movies" />

      <div className="moviesListContainer">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <div className="moviesListWrapper">
            {displayData.map((item, index) => {
                console.log(item)
              return (
                <div className="moviesListContainer-item" key={index}>
                <div className="moviesListContainer-image">
                <img src={item.images?.["Poster Art"]?.url} style={{width:"100%",height:"100%"}} />
                </div>
                <div className="moviesListContainer-desc">
                 <h6>
                 {item.title}
                 </h6> 
                 <h6>
                  {item.releaseYear}
                 </h6>
                </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Movies;
