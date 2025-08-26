import React, { useState } from 'react';

const LimpiezaPersonal = ({ onNext, onPrevious, data }) => {
  const [stepData, setStepData] = useState({
    shampooEnvasePequenos: data.shampooEnvasePequenos || '',
    jabonciilos: data.jabonciilos || '',
    pastaDental: data.pastaDental || '',
    cepilloDeDientes: data.cepilloDeDientes || '',
    toallasHumedas: data.toallasHumedas || '',
    toallasHigienicas: data.toallasHigienicas || '',
    papelHigienico: data.papelHigienico || '',
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
      <h2>Limpieza Personal</h2>

      <div className="form-fields-grid">
        <div className="form-field">
          <label htmlFor="shampooEnvasePequenos">SHAMPOO ENVASES PEQUEÑOS O SACHET</label>
          <div className="input-with-buttons">
            <button type="button" onClick={() => handleIncrementDecrement('shampooEnvasePequenos', -1)}>-</button>
            <input
              type="number"
              min="0"
              id="shampooEnvasePequenos"
              name="shampooEnvasePequenos"
              value={stepData.shampooEnvasePequenos}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleIncrementDecrement('shampooEnvasePequenos', 1)}>+</button>
          </div>
        </div>
        
        <div className="form-field">
          <label htmlFor="jabonciilos">JABONCILLOS</label>
          <div className="input-with-buttons">
            <button type="button" onClick={() => handleIncrementDecrement('jabonciilos', -1)}>-</button>
            <input
              type="number"
              min="0"
              id="jabonciilos"
              name="jabonciilos"
              value={stepData.jabonciilos}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleIncrementDecrement('jabonciilos', 1)}>+</button>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="pastaDental">PASTA DENTAL</label>
          <div className="input-with-buttons">
            <button type="button" onClick={() => handleIncrementDecrement('pastaDental', -1)}>-</button>
            <input
              type="number"
              min="0"
              id="pastaDental"
              name="pastaDental"
              value={stepData.pastaDental}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleIncrementDecrement('pastaDental', 1)}>+</button>
          </div>
        </div>
        
        <div className="form-field">
          <label htmlFor="cepilloDeDientes">CEPILLO DE DIENTES</label>
          <div className="input-with-buttons">
            <button type="button" onClick={() => handleIncrementDecrement('cepilloDeDientes', -1)}>-</button>
            <input
              type="number"
              min="0"
              id="cepilloDeDientes"
              name="cepilloDeDientes"
              value={stepData.cepilloDeDientes}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleIncrementDecrement('cepilloDeDientes', 1)}>+</button>
          </div>
        </div>
        
        <div className="form-field">
          <label htmlFor="toallasHumedas">TOALLAS HÚMEDAS</label>
          <div className="input-with-buttons">
            <button type="button" onClick={() => handleIncrementDecrement('toallasHumedas', -1)}>-</button>
            <input
              type="number"
              min="0"
              id="toallasHumedas"
              name="toallasHumedas"
              value={stepData.toallasHumedas}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleIncrementDecrement('toallasHumedas', 1)}>+</button>
          </div>
        </div>
        
        <div className="form-field">
          <label htmlFor="toallasHigienicas">TOALLAS HIGIÉNICAS</label>
          <div className="input-with-buttons">
            <button type="button" onClick={() => handleIncrementDecrement('toallasHigienicas', -1)}>-</button>
            <input
              type="number"
              min="0"
              id="toallasHigienicas"
              name="toallasHigienicas"
              value={stepData.toallasHigienicas}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleIncrementDecrement('toallasHigienicas', 1)}>+</button>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="papelHigienico">PAPEL HIGIÉNICO</label>
          <div className="input-with-buttons">
            <button type="button" onClick={() => handleIncrementDecrement('papelHigienico', -1)}>-</button>
            <input
              type="number"
              min="0"
              id="papelHigienico"
              name="papelHigienico"
              value={stepData.papelHigienico}
              onChange={handleChange}
            />
            <button type="button" onClick={() => handleIncrementDecrement('papelHigienico', 1)}>+</button>
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

export default LimpiezaPersonal;