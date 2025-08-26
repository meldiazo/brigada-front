// src/components/Steps/Herramientas.jsx
import React, { useState } from 'react';

const Herramientas = ({ onNext, onPrevious, data }) => {
  const [stepData, setStepData] = useState({
    linternasDeCabeza: data.linternasDeCabeza || '',
    pilasAA: data.pilasAA || '',
    pilasAAA: data.pilasAAA || '',
    azadon: data.azadon || '',
    palaConMangoDeFibra: data.palaConMangoDeFibra || '',
    rastrilloMangoDeFibra: data.rastrilloMangoDeFibra || '',
    mcleodMangoDeFibra: data.mcleodMangoDeFibra || '',
    batefuego: data.batefuego || '',
    gorgui: data.gorgui || '',
    pulaskyConMangoDeFibra: data.pulaskyConMangoDeFibra || '',
    quemadorDeGoteo: data.quemadorDeGoteo || '',
    mochilaForestale: data.mochilaForestale || '',
    escobetaDeAlambre: data.escobetaDeAlambre || '',
    observaciones: data.observaciones || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStepData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleIncrementDecrement = (name, delta) => {
    setStepData(prevData => {
      const currentValue = parseInt(prevData[name]) || 0;
      const newValue = Math.max(0, currentValue + delta);
      return { ...prevData, [name]: newValue };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(stepData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Herramientas</h2>
      
      <div className="form-fields-grid">
        {Object.keys(stepData).filter(key => key !== 'observaciones').map(key => (
          <div key={key} className="form-field">
            <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
            <div className="input-with-buttons">
              <button type="button" onClick={() => handleIncrementDecrement(key, -1)}>-</button>
              <input
                type="number"
                min="0"
                id={key}
                name={key}
                value={stepData[key]}
                onChange={handleChange}
              />
              <button type="button" onClick={() => handleIncrementDecrement(key, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="form-field full-width">
        <label htmlFor="observaciones">Observaciones</label>
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

export default Herramientas;