import React, { useContext } from "react";
//import { AppContext } from './Context'
import { useGlobalContext } from "./Context";
import "./App.css"
import { NavLink } from "react-router-dom";

const Movies = () => {
  //const movie=useContext(AppContext)
  const { movie } = useGlobalContext();
  return (
    <>
    <div class="four">
  <h1>Weekend  <span>Movies</span>  </h1>
</div>

      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie.map((item) => {
            const { Title, Year, Poster, imdbID } = item
            const MovieName=Title.substring(0,15);
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">

                    <img className='rounded-lg w-full h-full mb-2' src={Poster} alt="" />
                    <h2 className='text-xl text-white font-bold'>{MovieName}</h2>
                    <h2 className='text-lg text-white mb-2'>Year : {Year}</h2>
                  </div>

                </div>
              </NavLink>
            )

          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
