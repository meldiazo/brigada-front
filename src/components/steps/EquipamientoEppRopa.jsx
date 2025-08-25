import React, { useState } from 'react';

const EquipamientoEppRopa = ({ onNext, onPrevious, data }) => {
  const [stepData, setStepData] = useState({
    ropa: {
      unidades: data.ropa?.unidades || '',
      xs: data.ropa?.xs || '',
      s: data.ropa?.s || '',
      m: data.ropa?.m || '',
      l: data.ropa?.l || '',
      xl: data.ropa?.xl || '',
    },
    camisaForestal: {
      unidades: data.camisaForestal?.unidades || '',
      xs: data.camisaForestal?.xs || '',
      s: data.camisaForestal?.s || '',
      m: data.camisaForestal?.m || '',
      l: data.camisaForestal?.l || '',
      xl: data.camisaForestal?.xl || '',
    },
    pantalonForestal: {
      unidades: data.pantalonForestal?.unidades || '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(stepData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Segunda Sección: Equipamiento EPP (Ropa)</h2>
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
              <td><input type="number" value={stepData.camisaForestal.xs} onChange={(e) => handleItemChange('camisaForestal', 'xs', e.target.value)} /></td>
              <td><input type="number" value={stepData.camisaForestal.s} onChange={(e) => handleItemChange('camisaForestal', 's', e.target.value)} /></td>
              <td><input type="number" value={stepData.camisaForestal.m} onChange={(e) => handleItemChange('camisaForestal', 'm', e.target.value)} /></td>
              <td><input type="number" value={stepData.camisaForestal.l} onChange={(e) => handleItemChange('camisaForestal', 'l', e.target.value)} /></td>
              <td><input type="number" value={stepData.camisaForestal.xl} onChange={(e) => handleItemChange('camisaForestal', 'xl', e.target.value)} /></td>
            </tr>
            <tr>
              <td>Pantalón Forestal</td>
              <td><input type="number" value={stepData.pantalonForestal.xs} onChange={(e) => handleItemChange('pantalonForestal', 'xs', e.target.value)} /></td>
              <td><input type="number" value={stepData.pantalonForestal.s} onChange={(e) => handleItemChange('pantalonForestal', 's', e.target.value)} /></td>
              <td><input type="number" value={stepData.pantalonForestal.m} onChange={(e) => handleItemChange('pantalonForestal', 'm', e.target.value)} /></td>
              <td><input type="number" value={stepData.pantalonForestal.l} onChange={(e) => handleItemChange('pantalonForestal', 'l', e.target.value)} /></td>
              <td><input type="number" value={stepData.pantalonForestal.xl} onChange={(e) => handleItemChange('pantalonForestal', 'xl', e.target.value)} /></td>
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