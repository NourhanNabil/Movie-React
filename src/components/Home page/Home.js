import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import logo from "../Navbar/logo.png";
import "./Home.css";

export default function Home(){
    const [Home, setHome]= useState();

 return(
    <div className=" homepage d-flex align-items-center justify-content-center">
       <h1 className=" text-uppercase me-5">Enjoy Navigating</h1>
        <img src={logo} alt="logo" />
    </div>
 )
}

            