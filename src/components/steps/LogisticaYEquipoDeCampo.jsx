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

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(stepData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Octava Sección: Logística y Equipo de Campo</h2>

      <div className="form-fields-grid">
        <div className="form-field">
          <label htmlFor="colchoneta">COLCHONETA</label>
          <input
            type="number"
            id="colchoneta"
            name="colchoneta"
            value={stepData.colchoneta}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="sleeping">SLEEPING</label>
          <input
            type="number"
            id="sleeping"
            name="sleeping"
            value={stepData.sleeping}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="camping">CAMPING</label>
          <input
            type="number"
            id="camping"
            name="camping"
            value={stepData.camping}
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
          Siguiente
        </button>
      </div>
    </form>
  );
};

export default LogisticaYEquipoDeCampo;