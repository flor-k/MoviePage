import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "bootstrap";
import Index from "./Index.css";

export default function Carusel(props) {

    const poster1 = `https://image.tmdb.org/t/p/w500${props?.movies[0]?.poster_path}`;
    const poster2 = `https://image.tmdb.org/t/p/w500${props?.movies[1]?.poster_path}`;
    const poster3 = `https://image.tmdb.org/t/p/w500${props?.movies[2]?.poster_path}`;


  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

    <div className="carousel-inner">

      <div className="carousel-item active carusel">
        <img src={poster1} className="d-block w-80 h-80" alt="..."/>
      </div>
      <div className="carousel-item carusel">
        <img src={poster2} className="d-block w-80 h-80" alt="..."/>
      </div>
      <div className="carousel-item carusel">
        <img src={poster3} className="d-block w-80 h-80" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
