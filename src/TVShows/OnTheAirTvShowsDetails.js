import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../network/axiosInstance";

export default function OnTheAirTvShowsDetails() {
  const params = useParams();
  const [OnTheAirTvShowsDetails, setOnTheAirTvShowsDetails] = useState({});
  console.log(params);
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) => setOnTheAirTvShowsDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container-float  details">
       <img  alt={OnTheAirTvShowsDetails.original_name} src={`https://image.tmdb.org/t/p/w500/${OnTheAirTvShowsDetails.poster_path}` }/> 
      <h1 >{OnTheAirTvShowsDetails.original_name}</h1>
      <p >{OnTheAirTvShowsDetails.overview}</p>
    </div>

  );
}