import React from 'react'
import { useParams } from 'react-router-dom'

const SinglePage= () => {

  const {imdbID}=useParams()

  return (
    <div>SinglePage movie id is : {imdbID}</div>
  )
}

export default SinglePage