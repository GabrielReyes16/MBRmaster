import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Consultas from './components/Consultas';
import NuevaUnidad from './components/NuevaUnidad';
import NuevaArea from './components/NuevaArea';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/api/consultar" element={<Consultas />} />
        <Route path="/api/nueva_unidad" element={<NuevaUnidad />} />
        <Route path="/api/nueva_area" element={<NuevaArea />} />
        {/* Otras rutas y componentes aquí */}
      </Routes>
    </Router>
  );
}

export default App;
