import axios from "axios";
import React from "react";
import { Bars } from "react-loader-spinner";
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

export const optionYears = [
  { id: 1, year: "2016" },
  { id: 2, year: "2015" },
  { id: 3, year: "2014" },
  { id: 4, year: "2013" },
  { id: 5, year: "2012" },
  { id: 6, year: "2011" },
];
const Movies = () => {
  const [movies, setMovies] = React.useState([]);
  const [displayData, setDisplayData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [filterYear, setFilterYear] = React.useState("");
  React.useEffect(() => {
    fetchApiData()
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.log(err, "err");
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      });
  }, []);
  React.useEffect(() => {
    setDisplayData(movies.slice(0, NUMBER_OF_MOVIES));
  }, [movies]);
  React.useEffect(() => {
    if (filterYear) {
      setDisplayData(
        movies
          .filter((movie) => movie.releaseYear == filterYear)
          .splice(0, NUMBER_OF_MOVIES)
      );
    } else {
      setDisplayData(movies.slice(0, NUMBER_OF_MOVIES));
    }
  }, [filterYear]);
  return (
    <div className="moviesContainer">
      <Header pageName="Popular Movies" />

      <div className="moviesListContainer">
        <div className="filtercomponent">
          <div className="select-component">
            <select onChange={(e) => setFilterYear(e.target.value)}>
              <option value="">All</option>
              {optionYears.map((item) => {
                return (
                  <option key={item.id} value={item.year}>
                    {item.year}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {isLoading ? (
          <div className="loader">
            <Bars
              heigth="100"
              width="100"
              color="white"
              ariaLabel="loading-indicator"
            />
          </div>
        ) : (
          <div className="moviesListWrapper">
            {displayData.map((item, index) => {
              return (
                <div className="moviesListContainer-item" key={index}>
                  <div className="moviesListContainer-image">
                    <img
                      src={item.images?.["Poster Art"]?.url}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="moviesListContainer-desc">
                    <h6>{item.title}</h6>
                    <h6>{item.releaseYear}</h6>
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
