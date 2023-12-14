import { useGlobalContext } from "./Context";
import React from "react";
import "./App.css"
const Search = () => {
  const {search,setSearch,iserror}=useGlobalContext();
  return (
    <div className="search-section">
    <h2>Search your favourite Movie</h2>
    <form action="#" onSubmit={(e)=>e.preventDefault()}>
    <div>

    <input value={search} onChange={(e=>setSearch(e.target.value))} type="text" placeholder="search any movie"></input>

    </div>
    </form>
    <div className="card-error">
  
    <p>{iserror.show && iserror.msg}</p>
    </div>
    </div>
  )
}

export default Search