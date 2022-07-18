import './App.css';
import React from 'react'
import Pelicula from './componentes/Pelicula'

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
      <header>
        <h1 className="heading">Lista de películas</h1>
        <h3>Un simple generador de películas hecho con React y HarperDB</h3>
      </header>
      <div>
        <Pelicula />
      </div>
      </div>
    </div>
  );
}

export default App;
