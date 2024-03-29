import React from 'react';
import AuthContext, { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Maestro from './components/Maestro';
import Gastos from './components/Gastos';
import Ventas from './components/Ventas';
import Compras from './components/Compras';
import Almacen from './components/Almacen';
import Finanzas from './components/Finanzas';
import RecursosHumanos from './components/RecursosHumanos'; 
import Organizacion from './components/Organizacion';
import Consultas from './components/Consultas';
import NuevaUnidad from './components/NuevaUnidad';
import NuevaArea from './components/NuevaArea';
import Login from './components/Login';
import Stock from './components/almacen/stock';

function App() {
  return (
    <Router>
        <AuthProvider>
          <AuthContext.Consumer>
              {({ isAuthenticated }) => (
                  isAuthenticated && <Login />
              )}
          </AuthContext.Consumer>
        <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/maestro" element={<Maestro />} />
        <Route path="/menu/gastos" element={<Gastos />} />
        <Route path="/menu/ventas" element={<Ventas />} />
        <Route path="/menu/compras" element={<Compras />} />
        <Route path="/menu/almacen" element={<Almacen />} />
        <Route path="/menu/finanzas" element={<Finanzas />} />
        <Route path="/menu/recursos_humanos" element={<RecursosHumanos />} />
        <Route path="/menu/maestro/organizacion" element={<Organizacion />} />
        <Route path="/menu/maestro/organizacion/consultar" element={<Consultas />} />
        <Route path="/menu/maestro/organizacion/nueva_unidad" element={<NuevaUnidad />} />
        <Route path="/menu/maestro/organizacion/nueva_area" element={<NuevaArea />} />
        {/* rutas de almacen */}
        <Route path="/menu/almacen/stock" element={<Stock />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
