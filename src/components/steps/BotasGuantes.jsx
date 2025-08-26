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

  const handleIncrementDecrement = (item, talla, delta) => {
    setStepData(prevData => {
      const currentValue = parseInt(prevData[item][talla]) || 0;
      const newValue = Math.max(0, currentValue + delta);
      return {
        ...prevData,
        [item]: {
          ...prevData[item],
          [talla]: newValue
        }
      };
    });
  };

  const handleChange = (item, talla, value) => {
    setStepData(prevData => ({
      ...prevData,
      [item]: {
        ...prevData[item],
        [talla]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(stepData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Botas y Guantes</h2>

      <div className="section-group">
        <div className="section-sub-group">
          <h3>Botas para Bomberos Forestales</h3>
          <div className="form-fields-grid">
            {Object.keys(stepData.botas).map(talla => (
              <div key={talla} className="form-field">
                <label htmlFor={`botas-${talla}`}>{talla.replace('talla', 'Talla ')}</label>
                <div className="input-with-buttons">
                  <button type="button" onClick={() => handleIncrementDecrement('botas', talla, -1)}>-</button>
                  <input
                    type="number"
                    min="0"
                    id={`botas-${talla}`}
                    value={stepData.botas[talla]}
                    onChange={(e) => handleChange('botas', talla, e.target.value)}
                  />
                  <button type="button" onClick={() => handleIncrementDecrement('botas', talla, 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="vertical-divider"></div>

        <div className="section-sub-group">
          <h3>Guantes de Cuero</h3>
          <div className="form-fields-grid">
            {Object.keys(stepData.guantes).map(talla => (
              <div key={talla} className="form-field">
                <label htmlFor={`guantes-${talla}`}>{talla.toUpperCase().replace('OTRATALLA', 'OTRA TALLA')}</label>
                <div className="input-with-buttons">
                  <button type="button" onClick={() => handleIncrementDecrement('guantes', talla, -1)}>-</button>
                  <input
                    type="number"
                    min="0"
                    id={`guantes-${talla}`}
                    value={stepData.guantes[talla]}
                    onChange={(e) => handleChange('guantes', talla, e.target.value)}
                  />
                  <button type="button" onClick={() => handleIncrementDecrement('guantes', talla, 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="form-buttons">
        <button type="button" onClick={onPrevious} className="btn-back">Atrás</button>
        <button type="submit" className="btn-next">Siguiente</button>
      </div>
    </form>
  );
};

export default BotasGuantes;