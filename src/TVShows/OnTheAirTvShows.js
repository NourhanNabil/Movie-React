import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {axiosInstance, AxiosInstance} from "../network/axiosInstance";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'

export default function OnTheAirTvShows(){
    const [OnTheAirTvShows, setOnTheAirTvShows]= useState([]);
    useEffect(()=>{
axiosInstance
.get("/tv/on_the_air")
.then((res)=>setOnTheAirTvShows(res.data.results))
.catch((err)=> console.log(err));
 },[]);
 return(
    <div className=" container-float PopularMovies ">
        {OnTheAirTvShows.map((item)=>{
            return(
                <div key={item.id} className="card col-2 m-4" >
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="card-img-top" alt={item.original_title}/>
                    <div className="card-body">
                        <Link to={`/tv/on_the_air/${item.id}`}><h6 className="">{item.name}</h6></Link>
                        <p className="card-text">Vote Average: {item.vote_average}</p>
                        <p className="card-text">Vote Count: {item.vote_count}</p>
                        <p className="card-text">First Air Date: {item.first_air_date}</p>
                    </div>
                </div>
                 )
        })}
    </div>
 )
}

            