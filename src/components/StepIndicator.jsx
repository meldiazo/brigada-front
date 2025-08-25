// src/components/StepIndicator.jsx
import React from 'react';

const stepsConfig = [
  "Datos de la Brigada",
  "Equipamiento EPP (Ropa)",
  "Botas y Guantes",
  "Equipamiento EPP (Otros)",
  "Herramientas",
  "Logística: Vehículos y Combustibles",
  "Alimentación y Bebidas",
  "Logística y Equipo de Campo",
  "Limpieza Personal",
  "Limpieza General",
  "Medicamentos",
  "Rescate Animal"
];

const StepIndicator = ({ currentStep }) => {
  return (
    <div className="step-indicator-container">
      <div className="logo">Brigadas</div>
      <div className="step-list">
        {stepsConfig.map((title, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          
          return (
            <div key={stepNumber} className={`step-item ${isActive ? 'active' : ''}`}>
              <div className="step-number-circle">{stepNumber}</div>
              <div className="step-content">
                <div className="step-title">{title}</div>
                <div className="step-description">Completa esta sección para continuar.</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="help-section">
        <p>¿Necesitas ayuda?</p>
        <p>chat con soporte en vivo</p>
        <div className="icon-container">🎧</div>
      </div>
    </div>
  );
};

export default StepIndicator;