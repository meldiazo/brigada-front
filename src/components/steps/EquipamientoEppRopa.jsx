import React, { useState } from 'react';

const EquipamientoEppRopa = ({ onNext, onPrevious, data }) => {
  const [stepData, setStepData] = useState({
    camisaForestal: {
      xs: data.camisaForestal?.xs || '',
      s: data.camisaForestal?.s || '',
      m: data.camisaForestal?.m || '',
      l: data.camisaForestal?.l || '',
      xl: data.camisaForestal?.xl || '',
    },
    pantalonForestal: {
      xs: data.pantalonForestal?.xs || '',
      s: data.pantalonForestal?.s || '',
      m: data.pantalonForestal?.m || '',
      l: data.pantalonForestal?.l || '',
      xl: data.pantalonForestal?.xl || '',
    },
    observaciones: data.observaciones || '',
  });

  const handleItemChange = (item, field, value) => {
    setStepData(prevData => ({
      ...prevData,
      [item]: {
        ...prevData[item],
        [field]: value
      }
    }));
  };

  const handleIncrementDecrement = (item, field, delta) => {
    setStepData(prevData => {
      const currentValue = parseInt(prevData[item][field]) || 0;
      const newValue = Math.max(0, currentValue + delta);
      return {
        ...prevData,
        [item]: {
          ...prevData[item],
          [field]: newValue
        }
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(stepData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Equipamiento EPP (Ropa)</h2>
      <p>Completa las cantidades de equipamiento por talla.</p>
      
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Ropa</th>
              <th>XS</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
              <th>XL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Camisa Forestal</td>
              <td>
                <div className="input-with-buttons">
                  <button type="button" onClick={() => handleIncrementDecrement('camisaForestal', 'xs', -1)}>-</button>
                  <input type="number" min="0" value={stepData.camisaForestal.xs} onChange={(e) => handleItemChange('camisaForestal', 'xs', e.target.value)} />
                  <button type="button" onClick={() => handleIncrementDecrement('camisaForestal', 'xs', 1)}>+</button>
                </div>
              </td>
              <td>
                <div className="input-with-buttons">
                  <button type="button" onClick={() => handleIncrementDecrement('camisaForestal', 's', -1)}>-</button>
                  <input type="number" min="0" value={stepData.camisaForestal.s} onChange={(e) => handleItemChange('camisaForestal', 's', e.target.value)} />
                  <button type="button" onClick={() => handleIncrementDecrement('camisaForestal', 's', 1)}>+</button>
                </div>
              </td>
              <td>
                <div className="input-with-buttons">
                  <button type="button" onClick={() => handleIncrementDecrement('camisaForestal', 'm', -1)}>-</button>
                  <input type="number" min="0" value={stepData.camisaForestal.m} onChange={(e) => handleItemChange('camisaForestal', 'm', e.target.value)} />
                  <button type="button" onClick={() => handleIncrementDecrement('camisaForestal', 'm', 1)}>+</button>
                </div>
              </td>
              <td>
                <div className="input-with-buttons">
                  <button type="button" onClick={() => handleIncrementDecrement('camisaForestal', 'l', -1)}>-</button>
                  <input type="number" min="0" value={stepData.camisaForestal.l} onChange={(e) => handleItemChange('camisaForestal', 'l', e.target.value)} />
                  <button type="button" onClick={() => handleIncrementDecrement('camisaForestal', 'l', 1)}>+</button>
                </div>
              </td>
              <td>
                <div className="input-with-buttons">
                  <button type="button" onClick={() => handleIncrementDecrement('camisaForestal', 'xl', -1)}>-</button>
                  <input type="number" min="0" value={stepData.camisaForestal.xl} onChange={(e) => handleItemChange('camisaForestal', 'xl', e.target.value)} />
                  <button type="button" onClick={() => handleIncrementDecrement('camisaForestal', 'xl', 1)}>+</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Pantalón Forestal</td>
              <td>
                <div className="input-with-buttons">
                  <button type="button" onClick={() => handleIncrementDecrement('pantalonForestal', 'xs', -1)}>-</button>
                  <input type="number" min="0" value={stepData.pantalonForestal.xs} onChange={(e) => handleItemChange('pantalonForestal', 'xs', e.target.value)} />
                  <button type="button" onClick={() => handleIncrementDecrement('pantalonForestal', 'xs', 1)}>+</button>
                </div>
              </td>
              <td>
                <div className="input-with-buttons">
                  <button type="button" onClick={() => handleIncrementDecrement('pantalonForestal', 's', -1)}>-</button>
                  <input type="number" min="0" value={stepData.pantalonForestal.s} onChange={(e) => handleItemChange('pantalonForestal', 's', e.target.value)} />
                  <button type="button" onClick={() => handleIncrementDecrement('pantalonForestal', 's', 1)}>+</button>
                </div>
              </td>
              <td>
                <div className="input-with-buttons">
                  <button type="button" onClick={() => handleIncrementDecrement('pantalonForestal', 'm', -1)}>-</button>
                  <input type="number" min="0" value={stepData.pantalonForestal.m} onChange={(e) => handleItemChange('pantalonForestal', 'm', e.target.value)} />
                  <button type="button" onClick={() => handleIncrementDecrement('pantalonForestal', 'm', 1)}>+</button>
                </div>
              </td>
              <td>
                <div className="input-with-buttons">
                  <button type="button" onClick={() => handleIncrementDecrement('pantalonForestal', 'l', -1)}>-</button>
                  <input type="number" min="0" value={stepData.pantalonForestal.l} onChange={(e) => handleItemChange('pantalonForestal', 'l', e.target.value)} />
                  <button type="button" onClick={() => handleIncrementDecrement('pantalonForestal', 'l', 1)}>+</button>
                </div>
              </td>
              <td>
                <div className="input-with-buttons">
                  <button type="button" onClick={() => handleIncrementDecrement('pantalonForestal', 'xl', -1)}>-</button>
                  <input type="number" min="0" value={stepData.pantalonForestal.xl} onChange={(e) => handleItemChange('pantalonForestal', 'xl', e.target.value)} />
                  <button type="button" onClick={() => handleIncrementDecrement('pantalonForestal', 'xl', 1)}>+</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="form-field full-width">
        <label htmlFor="observaciones">Observaciones</label>
        <textarea
          id="observaciones"
          name="observaciones"
          value={stepData.observaciones}
          onChange={(e) => setStepData(prevData => ({ ...prevData, observaciones: e.target.value }))}
          rows="3"
        ></textarea>
      </div>

      <div className="form-buttons">
        <button type="button" onClick={onPrevious} className="btn-back">Atrás</button>
        <button type="submit" className="btn-next">Siguiente</button>
      </div>
    </form>
  );
};

export default EquipamientoEppRopa;