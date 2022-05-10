import axios from "axios";
import React from "react";
import { Bars } from "react-loader-spinner";
import Footer from "../../components/footer";
import Header from "../../components/header";
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

const Series = () => {
  const [movies, setMovies] = React.useState([]);
  const [displayData, setDisplayData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [filterYear,setFilterYear] = React.useState('');
  const [years, setYears] = React.useState([]);
  
  React.useEffect(() => {
    fetchApiData()
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.log(err, "err");
      })
      .finally(() => {
        setTimeout(()=>{
            setIsLoading(false);},1500);
        })
  }, []);
  React.useEffect(() => {
    setDisplayData(movies.slice(0, NUMBER_OF_MOVIES));
    setYears(new Set(movies.map(item=>item.releaseYear).sort()))
  
  }, [movies]);
    React.useEffect(() => {
        if(filterYear){
            setDisplayData(movies.filter(movie => movie.releaseYear == filterYear).splice(0, NUMBER_OF_MOVIES));
        }
        else{
            setDisplayData(movies.slice(0, NUMBER_OF_MOVIES));
        }
    }, [filterYear]);
  return (
    <div className="moviesContainer">
      <Header pageName="Popular Series" />

      <div className="moviesListContainer">
      <div className="filtercomponent">
      <div className="select-component">
      <select onChange={e=>setFilterYear(e.target.value)}>
        <option value="">All</option>
        {Array.from(years).reverse().map((item) => {
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
          <Bars heigth="100" width="100" color="white" ariaLabel="loading-indicator" />
          </div>
        ) : (
          <div className="moviesListWrapper">
            {displayData.map((item, index) => {
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

export default Series;
