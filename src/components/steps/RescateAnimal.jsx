import React, { useState } from 'react';

const RescateAnimal = ({ onNext, onPrevious, data, isLastStep }) => {
  const [stepData, setStepData] = useState({
    alimentosParaAnimales: data.alimentosParaAnimales || '',
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
      <h2>Rescate Animal</h2>

      <div className="form-fields-grid">
        <div className="form-field full-width">
          <label htmlFor="alimentosParaAnimales">ALIMENTOS PARA ANIMALES</label>
          <div className="input-with-buttons">
            <button type="button" onClick={() => handleIncrementDecrement('alimentosParaAnimales', -1)}>-</button>
            <input
              type="number"
              min="0"
              id="alimentosParaAnimales"
              name="alimentosParaAnimales"
              value={stepData.alimentosParaAnimales}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleIncrementDecrement('alimentosParaAnimales', 1)}>+</button>
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
          Finalizar y Enviar
        </button>
      </div>
    </form>
  );
};

export default RescateAnimal;