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

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(stepData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Novena Sección: Limpieza Personal</h2>

      <div className="form-fields-grid">
        <div className="form-field">
          <label htmlFor="shampooEnvasePequenos">SHAMPOO ENVASES PEQUEÑOS O SACHET</label>
          <input
            type="number"
            id="shampooEnvasePequenos"
            name="shampooEnvasePequenos"
            value={stepData.shampooEnvasePequenos}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="jabonciilos">JABONCILLOS</label>
          <input
            type="number"
            id="jabonciilos"
            name="jabonciilos"
            value={stepData.jabonciilos}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="pastaDental">PASTA DENTAL</label>
          <input
            type="number"
            id="pastaDental"
            name="pastaDental"
            value={stepData.pastaDental}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="cepilloDeDientes">CEPILLO DE DIENTES</label>
          <input
            type="number"
            id="cepilloDeDientes"
            name="cepilloDeDientes"
            value={stepData.cepilloDeDientes}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="toallasHumedas">TOALLAS HÚMEDAS</label>
          <input
            type="number"
            id="toallasHumedas"
            name="toallasHumedas"
            value={stepData.toallasHumedas}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="toallasHigienicas">TOALLAS HIGIÉNICAS</label>
          <input
            type="number"
            id="toallasHigienicas"
            name="toallasHigienicas"
            value={stepData.toallasHigienicas}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="papelHigienico">PAPEL HIGIÉNICO</label>
          <input
            type="number"
            id="papelHigienico"
            name="papelHigienico"
            value={stepData.papelHigienico}
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

export default LimpiezaPersonal;