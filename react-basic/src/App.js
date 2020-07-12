import React, { useState } from "react";
import Header from "./components/Header";
//import Body from "./components/Body";
import Insulto from "./components/Insultos";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Sacar Fecha
  const fecha = new Date().getFullYear();

  // Listado de Insultos
  const [insultos, setInsultos] = useState([
    { id: 1, nombre: "Gilipollas", ofensa: 50 },
    { id: 2, nombre: "Retrasado", ofensa: 60 },
    { id: 3, nombre: "Gallina", ofensa: 30 },
    { id: 4, nombre: "Votante de Vox", ofensa: 100 },
    { id: 5, nombre: "Mindundi", ofensa: 40 },
  ]);

  // Insultos Guardados
  const [guardados, agregarInsultos] = useState([]);

  return (
    <div className="App">
      <Header titulo="Insultos a go go" />
      <h2>Listado de insultos</h2>
      {insultos.map((insulto) => (
        <Insulto
          key={insulto.id}
          insulto={insulto}
          insultos={insultos}
          guardados={guardados}
          agregarInsultos={agregarInsultos}
        />
      ))}
      <Footer fecha={fecha} />
    </div>
  );
}

export default App;
