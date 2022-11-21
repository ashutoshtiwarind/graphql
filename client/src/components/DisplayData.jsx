import React from "react";
import { useQuery, gql } from "@apollo/client";
const QUERY_ALL_USERS =  gql`
  query GetMovies {
    movies {
      name
      isInTheaters
      yearOfPublication
    }
  }
`
function DisplayData() {
  const {data, loading, error} = useQuery(QUERY_ALL_USERS);
  if (error){
    console.log(error)
  }
  if(data) {
    console.log(data)
  }
  return <div> {data && data.movies.map((movie) => {
    return <div>
      <h1>name: {movie.name}</h1>
    </div>
  })}</div>
}

export default DisplayData;