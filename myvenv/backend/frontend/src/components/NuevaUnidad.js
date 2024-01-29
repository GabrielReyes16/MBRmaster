import React, { useState } from 'react';
import api from '../api';

const NuevaUnidad = () => {
  const [nombreUnidad, setNombreUnidad] = useState('');

  const handleGuardar = async () => {
    try {
      const datosUnidad = { nombre: nombreUnidad };
      const response = await api.nuevaUnidad(datosUnidad);
      console.log(response);
    } catch (error) {
      console.error('Error al guardar nueva unidad:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Nueva Unidad</h2>
      <div className="mb-3">
        <label className="form-label">Nombre de la Unidad:</label>
        <input
          type="text"
          className="form-control"
          value={nombreUnidad}
          onChange={(e) => setNombreUnidad(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleGuardar}>
        Guardar
      </button>
    </div>
  );
};

export default NuevaUnidad;
