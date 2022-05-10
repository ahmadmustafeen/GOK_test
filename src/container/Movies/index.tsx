import axios from "axios";
import gql from "graphql-tag";
import React from "react";
import { Query, useQuery } from "react-apollo";
import { Bars } from "react-loader-spinner";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { MovieListComponent } from "../../components/movielistcomponent";
// @ts-ignore
import { MOVIES_URL } from "../../constant";

import "./style.css";

const NUMBER_OF_MOVIES = 25;
const fetchApiData = async () => {
  return axios
    .get(MOVIES_URL)
    .then((data) => {
      return data?.data?.entries;
    })
    .catch((err) => {
      throw err;
    });
};

const Movies = () => {
  const [movies, setMovies] = React.useState<any[]>([]);
  const [displayData, setDisplayData] = React.useState<any []>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [years, setYears] = React.useState<any []>([]);
  const [filterYear, setFilterYear] = React.useState("");
  const [startingIndex, setStartingIndex] = React.useState(0);
  React.useEffect(() => {
    fetchApiData()
      .then((data) => {
        // setMovies(data);
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
    setYears(Array.from(new Set(movies.map((item) => item.releaseYear).sort())));
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
  const handleIndexChange = (index:any) => {
    setStartingIndex(index);
    setDisplayData(
      movies.slice(
        index * NUMBER_OF_MOVIES,
        index * NUMBER_OF_MOVIES + NUMBER_OF_MOVIES
      )
    );
  };
  
const FETCH_MOVIES = gql`
query {
  queryMovies {
    title
    releaseYear
    images {
      PosterArt {
        url
      }
    }
  }
}
`;
  const {data} = useQuery(FETCH_MOVIES);
  React.useEffect(()=>{
    if(data){
      setMovies(data?.queryMovies);
    }
  },[data]);

  
  return (
    <div className="moviesContainer">
      <Header pageName="Popular Movies" />

      <div className="moviesListContainer">
        <div className="filtercomponent">
          <div className="select-component">
            <select onChange={(e) => setFilterYear(e.target.value)}>
              <option value="">All</option>
              {Array.from(years)
                .reverse()
                .map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        {isLoading ? (
          <div className="loader">
            <Bars
              height="100"
              width="100"
              color="white"
              ariaLabel="loading-indicator"
            />
          </div>
        ) : (
          <div className="moviesListWrapper">
            {displayData.map((item, index) => {
              return <MovieListComponent item={item} index={index} />;
            })}
          </div>
        )}
      </div>
      {filterYear === "" && (
        <div className="pagination-container">
          {Array.from(
            { length: Math.ceil(movies.length / NUMBER_OF_MOVIES) },
            (v, k) => k + 1
          ).map((item, index) => {
            return (
              <div
                className={`pagination-item ${
                  startingIndex === index ? "active" : ""
                }`}
                onClick={() => handleIndexChange(index)}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Movies;
