import React, { useState } from 'react';

const LimpiezaGeneral = ({ onNext, onPrevious, data }) => {
  const [stepData, setStepData] = useState({
    ace: data.ace || '',
    lavandina: data.lavandina || '',
    observacion: data.observacion || '',
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
      <h2>Limpieza General</h2>

      <div className="form-fields-grid">
        <div className="form-field">
          <label htmlFor="ace">ACE</label>
          <div className="input-with-buttons">
            <button type="button" onClick={() => handleIncrementDecrement('ace', -1)}>-</button>
            <input
              type="number"
              min="0"
              id="ace"
              name="ace"
              value={stepData.ace}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleIncrementDecrement('ace', 1)}>+</button>
          </div>
        </div>
        
        <div className="form-field">
          <label htmlFor="lavandina">LAVANDINA</label>
          <div className="input-with-buttons">
            <button type="button" onClick={() => handleIncrementDecrement('lavandina', -1)}>-</button>
            <input
              type="number"
              min="0"
              id="lavandina"
              name="lavandina"
              value={stepData.lavandina}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleIncrementDecrement('lavandina', 1)}>+</button>
          </div>
        </div>
      </div>

      <div className="form-field full-width">
        <label htmlFor="observacion">OBSERVACIÓN</label>
        <textarea
          id="observacion"
          name="observacion"
          value={stepData.observacion}
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

export default LimpiezaGeneral;