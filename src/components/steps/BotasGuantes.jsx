import React, { useState } from 'react';

const BotasGuantes = ({ onNext, onPrevious, data }) => {
  const [stepData, setStepData] = useState({
    botas: {
      talla37: data.botas?.talla37 || '',
      talla38: data.botas?.talla38 || '',
      talla39: data.botas?.talla39 || '',
      talla40: data.botas?.talla40 || '',
      talla41: data.botas?.talla41 || '',
      talla42: data.botas?.talla42 || '',
      talla43: data.botas?.talla43 || '',
      otraTalla: data.botas?.otraTalla || '',
    },
    guantes: {
      xs: data.guantes?.xs || '',
      s: data.guantes?.s || '',
      m: data.guantes?.m || '',
      l: data.guantes?.l || '',
      xl: data.guantes?.xl || '',
      xxl: data.guantes?.xxl || '',
      otraTalla: data.guantes?.otraTalla || '',
    },
  });

  const handleBotasChange = (talla, value) => {
    setStepData(prevData => ({
      ...prevData,
      botas: { ...prevData.botas, [talla]: value }
    }));
  };

  const handleGuantesChange = (talla, value) => {
    setStepData(prevData => ({
      ...prevData,
      guantes: { ...prevData.guantes, [talla]: value }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(stepData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Tercera Sección: Botas y Guantes</h2>

      <h3>Botas para Bomberos Forestales</h3>
      <div className="form-fields-grid">
        {Object.keys(stepData.botas).map(talla => (
          <div key={talla} className="form-field">
            <label htmlFor={`botas-${talla}`}>{talla.replace('talla', 'Talla ')}</label>
            <input
              type="number"
              id={`botas-${talla}`}
              value={stepData.botas[talla]}
              onChange={(e) => handleBotasChange(talla, e.target.value)}
            />
          </div>
        ))}
      </div>

      <hr style={{ margin: '30px 0' }} />

      <h3>Guantes de Cuero</h3>
      <div className="form-fields-grid">
        {Object.keys(stepData.guantes).map(talla => (
          <div key={talla} className="form-field">
            <label htmlFor={`guantes-${talla}`}>{talla.toUpperCase().replace('OTRATALLA', 'OTRA TALLA')}</label>
            <input
              type="number"
              id={`guantes-${talla}`}
              value={stepData.guantes[talla]}
              onChange={(e) => handleGuantesChange(talla, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="form-buttons">
        <button type="button" onClick={onPrevious} className="btn-back">Atrás</button>
        <button type="submit" className="btn-next">Siguiente</button>
      </div>
    </form>
  );
};

export default BotasGuantes;