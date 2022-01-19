import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {axiosInstance, AxiosInstance} from "../network/axiosInstance";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'

export default function TopRatedMovies(){
    const [TopRatedMovies, setUpTopRatedMovies]= useState([]);
    useEffect(()=>{
axiosInstance
.get("/movie/top_rated")
.then((res)=>setUpTopRatedMovies(res.data.results))
.catch((err)=> console.log(err));
 },[]);
 return(
    <div className=" container-float PopularMovies ">
        {TopRatedMovies.map((item)=>{
            return(
                <div key={item.id} className="card col-2 m-4" >
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="card-img-top" alt={item.original_title}/>
                    <div className="card-body">
                        <Link to={`/movie/top_rated/${item.id}`}><h6 className="">{item.title}</h6></Link>
                        <p className="card-text">Vote Average: {item.vote_average}</p>
                        <p className="card-text">Vote Count: {item.vote_count}</p>
                        <p className="card-text">Release Date: {item.release_date}</p>
                    </div>
                </div>
                 )
        })}
    </div>
 )
}

            