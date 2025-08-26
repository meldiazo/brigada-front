import React, { useState } from 'react';

const LogisticaYEquipoDeCampo = ({ onNext, onPrevious, data }) => {
  const [stepData, setStepData] = useState({
    colchoneta: data.colchoneta || '',
    sleeping: data.sleeping || '',
    camping: data.camping || '',
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
      <h2>Logística y Equipo de Campo</h2>

      <div className="form-fields-grid">
        <div className="form-field">
          <label htmlFor="colchoneta">COLCHONETA</label>
          <div className="input-with-buttons">
            <button type="button" onClick={() => handleIncrementDecrement('colchoneta', -1)}>-</button>
            <input
              type="number"
              min="0"
              id="colchoneta"
              name="colchoneta"
              value={stepData.colchoneta}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleIncrementDecrement('colchoneta', 1)}>+</button>
          </div>
        </div>
        
        <div className="form-field">
          <label htmlFor="sleeping">SLEEPING</label>
          <div className="input-with-buttons">
            <button type="button" onClick={() => handleIncrementDecrement('sleeping', -1)}>-</button>
            <input
              type="number"
              min="0"
              id="sleeping"
              name="sleeping"
              value={stepData.sleeping}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleIncrementDecrement('sleeping', 1)}>+</button>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="camping">CAMPING</label>
          <div className="input-with-buttons">
            <button type="button" onClick={() => handleIncrementDecrement('camping', -1)}>-</button>
            <input
              type="number"
              min="0"
              id="camping"
              name="camping"
              value={stepData.camping}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleIncrementDecrement('camping', 1)}>+</button>
          </div>
        </div>
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

export default LogisticaYEquipoDeCampo;