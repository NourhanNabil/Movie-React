import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../network/axiosInstance";

export default function PopularMoviesDetails() {
  const params = useParams();
  const [popularMoviesDetails, setPopularMoviesDetails] = useState({});
  console.log(params);
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) => setPopularMoviesDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container-float  details">
       <img  alt={popularMoviesDetails.title} src={`https://image.tmdb.org/t/p/w500/${popularMoviesDetails.poster_path}` }/> 
      <h1 >{popularMoviesDetails.title}</h1>
      <p >{popularMoviesDetails.overview}</p>
    </div>

  );
}
 