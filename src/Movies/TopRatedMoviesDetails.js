import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../network/axiosInstance";

export default function TopRatedMoviesDetails() {
  const params = useParams();
  const [TopRatedMoviesDetails, setTopRatedMoviesDetails] = useState({});
  console.log(params);
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) => setTopRatedMoviesDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container-float  details">
       <img  alt={TopRatedMoviesDetails.title} src={`https://image.tmdb.org/t/p/w500/${TopRatedMoviesDetails.poster_path}` }/> 
      <h1 >{TopRatedMoviesDetails.title}</h1>
      <p >{TopRatedMoviesDetails.overview}</p>
    </div>

  );
}