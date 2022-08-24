import Movie from "../Movie/Index";
import Index from "./Index.css";
import Carusel from "../Carusel/Index";

export default function MovieList(props) {

    return (
        <div className="Total">
            <Carusel movies={props.movies}/>
            <div className="MovieList">
           {props.movies && props.movies.map(item => {
                return (<Movie key={item.id} movieInfo={item} />);
            })}
            </div>

        </div>
    )
}
