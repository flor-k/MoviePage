import './App.css';
import MovieList from './components/MovieList/Index';
import NavBar from './components/NavBar/Index';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About/Index';
import MovieDetail from './components/MovieDetail/Index';

function App() {


  const [moviesAll, setMoviesAll] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=7e925b5abdc74a44a98a5d9bee65e2ea&language=en-US&page=1")
      .then((response) => response.json())
      .then((movies) => {
        setMoviesAll(movies.results);
      });
  }, []);


  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
      <Route path="/" element={<MovieList movies={moviesAll} />}/>
        <Route path="/about" element={<About/>} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
