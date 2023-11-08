import { NavLink } from "react-router-dom";
import "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav>
      <NavLink to="/pageAccueil">page d'accueil</NavLink>
      <NavLink to="/pageActualites">page d'actualités</NavLink>
      <NavLink to="/actualites">actualités</NavLink>
      <NavLink to="/projets">projets</NavLink>
      <NavLink to="/emails">message reçus</NavLink>
      <NavLink to="/admins">paramètres compte</NavLink>
    </nav>
  );
}
