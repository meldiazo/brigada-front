import React, { useState } from 'react';

const LogisticaVehiculos = ({ onNext, onPrevious, data }) => {
  const [stepData, setStepData] = useState({
    gasolina: data.gasolina || '',
    diesel: data.diesel || '',
    amortiguadores: data.amortiguadores || '',
    prensaDisco: data.prensaDisco || '',
    rectificacionDeFrenos: data.rectificacionDeFrenos || '',
    llantas: data.llantas || '',
    aceiteDeMotor: data.aceiteDeMotor || '',
    grasa: data.grasa || '',
    cambioDeAceite: data.cambioDeAceite || '',
    otroTipoDeArreglo: data.otroTipoDeArreglo || '',
    montoAproxCosto: data.montoAproxCosto || '',
    observaciones: data.observaciones || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStepData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(stepData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sexta Sección: Logística (Repuestos de Vehículos y Combustibles)</h2>

      <div className="form-fields-grid">
        {Object.keys(stepData).filter(key => key !== 'observaciones' && key !== 'montoAproxCosto').map(key => (
          <div key={key} className="form-field">
            <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
            <input
              type="text" // Usamos texto por si es un campo de detalle
              id={key}
              name={key}
              value={stepData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      <div className="form-field full-width">
        <label htmlFor="montoAproxCosto">MONTO APROX DEL COSTO</label>
        <input
          type="number"
          id="montoAproxCosto"
          name="montoAproxCosto"
          value={stepData.montoAproxCosto}
          onChange={handleChange}
        />
      </div>

      <div className="form-field full-width">
        <label htmlFor="observaciones">OBSERVACIONES</label>
        <textarea
          id="observaciones"
          name="observaciones"
          value={stepData.observaciones}
          onChange={handleChange}
          rows="3"
        ></textarea>
      </div>
      
      <div className="form-buttons">
        <button type="button" onClick={onPrevious} className="btn-back">
          Atrás
        </button>
        <button type="submit" className="btn-next">
          Siguiente
        </button>
      </div>
    </form>
  );
};

export default LogisticaVehiculos;