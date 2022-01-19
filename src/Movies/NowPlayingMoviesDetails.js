import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../network/axiosInstance";

export default function NowPlayingMoviesDetails() {
  const params = useParams();
  const [NowPlayingMoviesDetails, setNowPlayingMoviesDetails] = useState({});
  console.log(params);
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) => setNowPlayingMoviesDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container-float  details">
       <img  alt={NowPlayingMoviesDetails.title} src={`https://image.tmdb.org/t/p/w500/${NowPlayingMoviesDetails.poster_path}` }/> 
      <h1 >{NowPlayingMoviesDetails.title}</h1>
      <p >{NowPlayingMoviesDetails.overview}</p>
    </div>

  );
}