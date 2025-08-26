import React, { useState } from 'react';

const AlimentacionYbebidas = ({ onNext, onPrevious, data }) => {
  const [stepData, setStepData] = useState({
    alimentosYbebidas: data.alimentosYbebidas || '',
    agua: data.agua || '',
    rehidratantes: data.rehidratantes || '',
    barrasEnergizantes: data.barrasEnergizantes || '',
    lataDeAtun: data.lataDeAtun || '',
    lataDeFrejol: data.lataDeFrejol || '',
    lataDeViandada: data.lataDeViandada || '',
    lataDeChorizos: data.lataDeChorizos || '',
    refrescoEnSobres: data.refrescoEnSobres || '',
    lechePolvo: data.lechePolvo || '',
    frutosSecos: data.frutosSecos || '',
    pastillasDeMentaODulces: data.pastillasDeMentaODulces || '',
    alimentosNoPerecederos: data.alimentosNoPerecederos || '',
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
      <h2>Alimentación y Bebidas</h2>

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

export default AlimentacionYbebidas;