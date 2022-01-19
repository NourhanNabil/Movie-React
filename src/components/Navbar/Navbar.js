import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import logo from "./logo.png"

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="">
    <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
     <span className="navbar-toggler-icon"></span> MENU 
    </button>
    <div className="offcanvas offcanvas-start bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header text-light">
        <h3 className="offcanvas-title border-bottom" id="offcanvasNavbarLabel">Move-Ease</h3>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
            <li className="nav-item">
              <Link className="nav-link active"  aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
               <button className=" nav-link text-light dropdown-toggle bg-transparent border-0" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Movies
            </button>
              <ul className="dropdown-menu " aria-labelledby="offcanvasNavbarDropdown">
                <li><Link className="dropdown-item" to="/movie/popular">Popular</Link></li>
                <li><Link className="dropdown-item" to="/movie/now_playing">Now Playing</Link></li>
                <li><Link className="dropdown-item" to="/movie/upcoming">Upcoming</Link></li>
                <li><Link className="dropdown-item" to="/movie/top_rated">Top Rated</Link></li>
              </ul>   
            </li>
            <li className="nav-item dropdown">
             <button className=" nav-link text-light dropdown-toggle bg-transparent border-0" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              TV Shows
            </button>
            <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><Link className="dropdown-item" to="/tv/popular">Popular</Link></li>
              <li><Link className="dropdown-item" to="/tv/airing_today">Airing Today</Link></li>
              <li><Link className="dropdown-item" to="/tv/on_the_air">On TV</Link></li>
              <li><Link className="dropdown-item" to="/tv/top_rated">Top Rated</Link></li>
            </ul>
            </li>
        </ul>
      </div>
    </div>
          <img src={logo} alt="logo" width="80vw" className="ms-3"/>
  </div>
     <form className="d-flex">
      </form>
          <form className="d-flex">
            <Link className="nav-link text-light"  to="/Signinform" role="button"  aria-expanded="false">
              LogIn
            </Link>
              <Link className="nav-link text-light" to="/SignUpForm" role="button" aria-expanded="false">
              SignUp
            </Link>
          <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-light me-3" type="submit">Search</button>
      </form>
</nav>
  );
}