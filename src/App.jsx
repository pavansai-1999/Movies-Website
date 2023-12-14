import React from 'react'
import Home from './Home'
import Error from './Error'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SinglePage from './SinglePage'
import "./App.css"
const App = () => {
  return (

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='*' element={<Error/>}/>
    <Route path='movie/:id' element={<SinglePage/>}/>
    </Routes>
     )
}

export default App