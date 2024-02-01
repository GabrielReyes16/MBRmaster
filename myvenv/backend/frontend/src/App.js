import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Maestro from './components/Maestro';
import Gastos from './components/Gastos';
import Ventas from './components/Ventas';
import Compras from './components/Compras';
import Almacen from './components/Almacen';
import Finanzas from './components/Finanzas';
import Recursos_Humanos from './components/Recursos_Humanos';
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
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/maestro" element={<Maestro />} />
        <Route path="/menu/gastos" element={<Gastos />} />
        <Route path="/menu/ventas" element={<Ventas />} />
        <Route path="/menu/compras" element={<Compras />} />
        <Route path="/menu/almacen" element={<Almacen />} />
        <Route path="/menu/finanzas" element={<Finanzas />} />
        <Route path="/menu/recursos_humanos" element={<Recursos_Humanos />} />
        {/* Otras rutas y componentes aquí */}
      </Routes>
    </Router>
  );
}

export default App;
