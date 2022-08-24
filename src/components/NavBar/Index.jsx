import Index from "./Index.css"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function NavBar() {
  return (
      <div className="NavBar">
        <img src="./descarga.png" alt="" />
        <div className="contenedor">
        <a href="http://localhost:3000">Movies</a>
        <Link to="/about">About</Link>
        </div>
      </div>
  )
}
