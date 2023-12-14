import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './Context'
import "./App.css"
const SinglePage = () => {

  const { id } = useParams()
  const[isLoading,setisLoading]=useState(true)
  const[movie,setMovie]=useState("")
  const[iserror,issetError]=useState({show:false,msg:""})

 
  const getMovies=async(url)=>
  //(true)
{
  try{

      const res=await fetch(url)
      const data=await res.json()
      console.log(data.Search)
      if(data.Response==="True")
      {
          setisLoading(false)
          setMovie(data)
          issetError({ show: "false", msg: "" });
      }else
      {
          issetError({ show: "true", msg: data.Error });
          
      }
  }
  catch(e)
  {
      console.log(e)
  }

}

useEffect(()=>{

  //set timeout and clear timeout is for debouncing concept 
  let timerOut=setTimeout(()=>{
      getMovies(`${API_URL}&i=${id}`)
  },.700)

  return () =>clearTimeout(timerOut)
 
},[id])

if (isLoading) {
  return (
    <section className="movie-section ">
      <div className="loading">Loading....</div>;
    </section>
  );
}
  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>


  )
}

export default SinglePage