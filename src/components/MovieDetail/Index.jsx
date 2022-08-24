import Index from "./Index.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MovieDetail() {

    const [movie, setMovie] = useState();

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7e925b5abdc74a44a98a5d9bee65e2ea&language=en-US`)
            .then((response) => response.json())
            .then((movie) => {
                console.log(movie.poster_path);
                setMovie(movie);
            });
    }, []);

    const poster = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

    return (
        <div className="cardDetail">
        
            <img src={poster} alt="" className="Poster"/>
            <div className="divMvie">
            <h4>{movie?.title}</h4>
            <p>{movie?.overview}</p>
            </div>

        </div>

    )
}
