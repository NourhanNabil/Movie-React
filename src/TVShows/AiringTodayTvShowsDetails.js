import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../network/axiosInstance";

export default function AiringTodayTvShowsDetails() {
  const params = useParams();
  const [AiringTodayTvShowsDetails, setAiringTodayTvShowsDetails] = useState({});
  console.log(params);
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) => setAiringTodayTvShowsDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container-float  details">
       <img  alt={AiringTodayTvShowsDetails.original_name} src={`https://image.tmdb.org/t/p/w500/${AiringTodayTvShowsDetails.poster_path}` }/> 
      <h1 >{AiringTodayTvShowsDetails.original_name}</h1>
      <p >{AiringTodayTvShowsDetails.overview}</p>
    </div>

  );
}