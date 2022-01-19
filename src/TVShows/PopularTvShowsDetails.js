import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "../network/axiosInstance";

export default function PopularTvShowsDetails() {
  const params = useParams();
  const [PopularTvShowsDetails, setPopularTvShowsDetails] = useState({});
  console.log(params);
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) => setPopularTvShowsDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container-float  details">
       <img  alt={PopularTvShowsDetails.original_name} src={`https://image.tmdb.org/t/p/w500/${PopularTvShowsDetails.poster_path}` }/> 
      <h1 >{PopularTvShowsDetails.original_name}</h1>
      <p >{PopularTvShowsDetails.overview}</p>
    </div>

  );
}