import { Route, Routes } from "react-router-dom";
import PageAccueil from "../pages/pageAccueil";
import Actaualites from "../pages/actaualites";
import Navbar from "./Navbar";
import PageActualite from "../pages/pageActualite";
import Projets from "../pages/projets";
import Emailrecu from "../pages/emailrecu";
import Parametrescompte from "../pages/parametrescompte";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/pageAccueil" element={<PageAccueil />} />
        <Route path="/pageActualites" element={<PageActualite />} />
        <Route path="/actualites" element={<Actaualites />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/emails" element={<Emailrecu />} />
        <Route path="/admins" element={<Parametrescompte />} />
      </Routes>
    </>
  );
}
