import './App.css';
import{BrowserRouter, Route, Switch, Link } from "react-router-dom"
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import popularMoviesDetails from './Movies/PopularMoviesDetails';
import TopRatedMoviesDetails from './Movies/TopRatedMoviesDetails';
import UpcomingMoviesDetails from './Movies/UpcomingMoviesDetails';
import NowPlayingMoviesDetails from './Movies/NowPlayingMoviesDetails';
import popularMovies from './Movies/PopularMovies';
import NowPlayingMovies from './Movies/NowPlayingMovies';
import UpcomingMovies from './Movies/UpcomingMovies';
import TopRatedMovies from './Movies/TopRatedMovies';
import AiringTodayTvShowsDetails from './TVShows/AiringTodayTvShowsDetails';
import OnTheAirTvShowsDetails from './TVShows/OnTheAirTvShowsDetails';
import PopularTvShowsDetails from './TVShows/PopularTvShowsDetails';
import TopRatedTvShowsDetails from './TVShows/TopRatedTvShowsDetails';
import PopularTvShows from './TVShows/PopularTvShows';
import OnTheAirTvShows from './TVShows/OnTheAirTvShows';
import AiringTodayTvShows from './TVShows/AiringTodayTvShows';
import TopRatedTvShows from './TVShows/TopRatedTvShows';
import Signinform from './components/Login/Signinform'
import SignUpForm from './components/Signup/SignUpForm';
import Home from './components/Home page/Home'
function App() {
  return (
    <BrowserRouter>
          <Navbar/>
    <div className="container">
      <Switch>
      <Route path={"/"} exact component={Home} />
      <Route path={"/movie/popular/:id"} exact component={popularMoviesDetails} />
      <Route path={"/movie/now_playing/:id"} exact component={NowPlayingMoviesDetails} />
      <Route path={"/movie/upcoming/:id"} exact component={UpcomingMoviesDetails} />
      <Route path={"/movie/top_rated/:id"} exact component={TopRatedMoviesDetails} />
       <Route path={"/movie/popular"} exact component={popularMovies} />
       <Route path={"/movie/now_playing"} exact component={NowPlayingMovies} />
       <Route path={"/movie/upcoming"} exact component={UpcomingMovies} />
       <Route path={"/movie/top_rated"} exact component={TopRatedMovies} />
      <Route path={"/tv/popular/:id"} exact component={PopularTvShowsDetails} />
      <Route path={"/tv/on_the_air/:id"} exact component={OnTheAirTvShowsDetails} />
      <Route path={"/tv/airing_today/:id"} exact component={AiringTodayTvShowsDetails} />
      <Route path={"/tv/top_rated/:id"} exact component={TopRatedTvShowsDetails} />
       <Route path={"/tv/popular"} exact component={PopularTvShows} />
       <Route path={"/tv/on_the_air"} exact component={OnTheAirTvShows} />
       <Route path={"/tv/airing_today"} exact component={AiringTodayTvShows} />
       <Route path={"/tv/top_rated"} exact component={TopRatedTvShows} />
        <Route path={"/Signinform"} exact component={Signinform} />
       <Route path={"/SignUpForm"} exact component={SignUpForm} />
        <Route path={"*"} component={NotFound} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
