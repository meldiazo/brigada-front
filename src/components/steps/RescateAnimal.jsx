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

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(stepData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Décima Segunda Sección: Rescate Animal</h2>

      <div className="form-fields-grid">
        <div className="form-field full-width">
          <label htmlFor="alimentosParaAnimales">ALIMENTOS PARA ANIMALES</label>
          <input
            type="number"
            id="alimentosParaAnimales"
            name="alimentosParaAnimales"
            value={stepData.alimentosParaAnimales}
            onChange={handleChange}
          />
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