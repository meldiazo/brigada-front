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

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(stepData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Décima Sección: Limpieza General</h2>

      <div className="form-fields-grid">
        <div className="form-field">
          <label htmlFor="ace">ACE</label>
          <input
            type="number"
            id="ace"
            name="ace"
            value={stepData.ace}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="lavandina">LAVANDINA</label>
          <input
            type="number"
            id="lavandina"
            name="lavandina"
            value={stepData.lavandina}
            onChange={handleChange}
          />
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