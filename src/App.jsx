import { HashRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import "./animations.css";

import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

import Inicio from "./pages/Inicio";
import ComoFunciona from "./pages/ComoFunciona";
import Datos from "./pages/Datos";
import Desarrollo from "./pages/Desarrollo";
import Equipo from "./pages/Equipo";

function App() {
  return (
    <HashRouter>

      <div className="site">

        {/* MENÚ COMPARTIDO */}
        <Navbar />

        {/* CONTENIDO DE CADA PÁGINA */}
        <Routes>

          <Route path="/" element={<Inicio />} />

          <Route
            path="/como-funciona"
            element={<ComoFunciona />}
          />

          <Route
            path="/datos"
            element={<Datos />}
          />

          <Route
            path="/desarrollo"
            element={<Desarrollo />}
          />

          <Route
            path="/equipo"
            element={<Equipo />}
          />

          {/* Ruta para páginas inexistentes */}
          <Route
            path="*"
            element={
              <div className="container">
                <h2>Página no encontrada</h2>
                <p>La sección que buscas no existe.</p>
              </div>
            }
          />

        </Routes>

        {/* PIE DE PÁGINA COMPARTIDO */}
        {/* <Footer /> */}

      </div>

    </HashRouter>
  );
}

export default App;