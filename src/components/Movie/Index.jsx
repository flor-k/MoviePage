import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./Index.css";
import { useState } from "react";
import MovieDetail from "../MovieDetail/Index";
import {
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";

export default function Movie(props) {

    const [Info, setInfo] = useState(false);

    const handleInfo = ()=>{
        setInfo(!Info);
    }

    const navigate = useNavigate()
    const handleClick = (e)=>{
        e.preventDefault();
        navigate(`/movie/${props.movieInfo.id}`)
    }

   
    const poster = `https://image.tmdb.org/t/p/w500${props.movieInfo.poster_path}`;
    return (

        <div className="card">
                <img src={poster} className="card-img-top" alt="" />
                <div className="card-body">
                    <a className="card-title" onClick={handleClick}>{props.movieInfo.title}</a>
                    {Info && <p className="card-text">{props.movieInfo.overview}</p>}
                    <a href="#" onClick={handleInfo} className="btn btn-primary">More Info</a>

            </div>

 </div>

    )
}
