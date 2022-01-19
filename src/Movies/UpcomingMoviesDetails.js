import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../network/axiosInstance";

export default function UpcomingMoviesDetails() {
  const params = useParams();
  const [UpcomingMoviesDetails, setUpcomingMoviesDetails] = useState({});
  console.log(params);
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) => setUpcomingMoviesDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container-float  details">
       <img  alt={UpcomingMoviesDetails.title} src={`https://image.tmdb.org/t/p/w500/${UpcomingMoviesDetails.poster_path}` }/> 
      <h1 >{UpcomingMoviesDetails.title}</h1>
      <p >{UpcomingMoviesDetails.overview}</p>
    </div>

  );
}