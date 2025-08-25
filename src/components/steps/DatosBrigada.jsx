// src/components/Steps/DatosBrigada.jsx
import React, { useState } from 'react';

const DatosBrigada = ({ onNext, data, onPrevious, currentStep }) => {
  // Inicializa el estado local con los datos que ya existen o con valores vacíos
  const [stepData, setStepData] = useState({
    nombreBrigada: data.nombreBrigada || '',
    cantidadBomberos: data.cantidadBomberos || '',
    contactoComandante: data.contactoComandante || '',
    encargadoLogistica: data.encargadoLogistica || '',
    contactoLogistica: data.contactoLogistica || '',
    numeroEmergencia: data.numeroEmergencia || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Asegurarse de que 'cantidadBomberos' sea un número
    setStepData((prevData) => ({ 
      ...prevData, 
      [name]: name === 'cantidadBomberos' ? parseInt(value) || '' : value 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación básica: asegura que al menos el nombre de la brigada no esté vacío
    if (!stepData.nombreBrigada) {
      alert("Por favor, ingrese el Nombre de la Brigada.");
      return;
    }
    // Llama a la función onNext del componente principal para guardar y avanzar
    onNext(stepData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Primera Sección: Datos de la Brigada</h2>
      
      <div className="form-fields-grid">
        {/* Campo 1: Nombre de la Brigada */}
        <div className="form-field">
          <label htmlFor="nombreBrigada">NOMBRE DE LA BRIGADA*</label>
          <input
            type="text"
            id="nombreBrigada"
            name="nombreBrigada"
            value={stepData.nombreBrigada}
            onChange={handleChange}
            placeholder="Ej: Brigada Alfa"
            required
          />
        </div>

        {/* Campo 2: Cantidad de Bomberos Activos */}
        <div className="form-field">
          <label htmlFor="cantidadBomberos">CANTIDAD DE BOMBEROS ACTIVOS</label>
          <input
            type="number"
            id="cantidadBomberos"
            name="cantidadBomberos"
            value={stepData.cantidadBomberos}
            onChange={handleChange}
            placeholder="Ej: 25"
          />
        </div>
        
        {/* Campo 3: Contacto Celular Comandante */}
        <div className="form-field">
          <label htmlFor="contactoComandante">CONTACTO CELULAR COMANDANTE</label>
          <input
            type="tel"
            id="contactoComandante"
            name="contactoComandante"
            value={stepData.contactoComandante}
            onChange={handleChange}
            placeholder="Ej: 555-12345"
          />
        </div>

        {/* Campo 4: Encargado de Logística */}
        <div className="form-field">
          <label htmlFor="encargadoLogistica">ENCARGADO DE LOGÍSTICA</label>
          <input
            type="text"
            id="encargadoLogistica"
            name="encargadoLogistica"
            value={stepData.encargadoLogistica}
            onChange={handleChange}
            placeholder="Ej: Juan Pérez"
          />
        </div>

        {/* Campo 5: Contacto Celular Logística */}
        <div className="form-field">
          <label htmlFor="contactoLogistica">CONTACTO CELULAR LOGÍSTICA</label>
          <input
            type="tel"
            id="contactoLogistica"
            name="contactoLogistica"
            value={stepData.contactoLogistica}
            onChange={handleChange}
            placeholder="Ej: 555-67890"
          />
        </div>
        
        {/* Campo 6: Número de Emergencia Público */}
        <div className="form-field">
          <label htmlFor="numeroEmergencia">NÚMERO DE EMERGENCIA PÚBLICO (SI LO TIENE)</label>
          <input
            type="tel"
            id="numeroEmergencia"
            name="numeroEmergencia"
            value={stepData.numeroEmergencia}
            onChange={handleChange}
            placeholder="Ej: 911"
          />
        </div>
      </div>

      {/* Botones de Navegación */}
      <div className="form-buttons">
        {/* En el paso 1, no hay botón de 'Atrás' */}
        <button type="submit" className="btn-next">
          Siguiente
        </button>
      </div>
    </form>
  );
};

export default DatosBrigada;