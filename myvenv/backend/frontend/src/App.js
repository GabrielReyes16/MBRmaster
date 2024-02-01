import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Consultas from './components/Consultas';
import NuevaUnidad from './components/NuevaUnidad';
import NuevaArea from './components/NuevaArea';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/api/consultar" element={<Consultas />} />
        <Route path="/api/nueva_unidad" element={<NuevaUnidad />} />
        <Route path="/api/nueva_area" element={<NuevaArea />} />
        <Route path="/api/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
