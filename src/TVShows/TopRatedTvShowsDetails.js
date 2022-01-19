import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../network/axiosInstance";

export default function TopRatedTvShowsDetails() {
  const params = useParams();
  const [TopRatedTvShowsDetails, setTopRatedTvShowsDetails] = useState({});
  console.log(params);
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) => setTopRatedTvShowsDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container-float  details">
       <img  alt={TopRatedTvShowsDetails.original_name} src={`https://image.tmdb.org/t/p/w500/${TopRatedTvShowsDetails.poster_path}` }/> 
      <h1 >{TopRatedTvShowsDetails.original_name}</h1>
      <p >{TopRatedTvShowsDetails.overview}</p>
    </div>

  );
}