import React, { useState, useEffect } from 'react';
import api from '../api';

const NuevaArea = () => {
  const [nombreArea, setNombreArea] = useState('');
  const [unidades, setUnidades] = useState([]);
  const [selectedUnidad, setSelectedUnidad] = useState('');

  useEffect(() => {
    const fetchUnidades = async () => {
      try {
        const response = await api.obtenerDatos();
        setUnidades(response.unidades);
      } catch (error) {
        console.error('Error al obtener unidades:', error);
      }
    };

    fetchUnidades();
  }, []);

  const handleGuardar = async () => {
    try {
      const datosArea = { nombre: nombreArea, unidad: selectedUnidad };
      const response = await api.nuevaArea(datosArea);
      console.log(response);
    } catch (error) {
      console.error('Error al guardar nueva área:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Nueva Área</h2>
      <div className="mb-3">
        <label className="form-label">Nombre de la Área:</label>
        <input
          type="text"
          className="form-control"
          value={nombreArea}
          onChange={(e) => setNombreArea(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Seleccionar Unidad:</label>
        <select
          className="form-select"
          value={selectedUnidad}
          onChange={(e) => setSelectedUnidad(e.target.value)}
        >
          <option value="">Seleccionar...</option>
          {unidades.map((unidad) => (
            <option key={unidad.id} value={unidad.id}>
              {unidad.nombre}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary" onClick={handleGuardar}>
        Guardar
      </button>
    </div>
  );
};

export default NuevaArea;
