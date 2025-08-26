import React, { useState } from 'react';
import StepIndicator from './components/StepIndicator';

// Importa todos los componentes de los pasos
import DatosBrigada from './components/steps/DatosBrigada';
import EquipamientoEppRopa from './components/steps/EquipamientoEppRopa';
import BotasGuantes from './components/steps/BotasGuantes';
import EquipamientoEppOtros from './components/steps/EquipamientoEppOtros';
import Herramientas from './components/steps/Herramientas';
import LogisticaVehiculos from './components/steps/LogisticaVehiculos';
import AlimentacionYbebidas from './components/steps/AlimentacionYbebidas';
import LogisticaYEquipoDeCampo from './components/steps/LogisticaYEquipoDeCampo';
import LimpiezaPersonal from './components/steps/LimpiezaPersonal';
import LimpiezaGeneral from './components/steps/LimpiezaGeneral';
import Medicamentos from './components/steps/Medicamentos';
import RescateAnimal from './components/steps/RescateAnimal';

import './App.css'; 

// Array que contiene todos los componentes de los pasos en orden
const stepsComponents = [
  DatosBrigada,
  EquipamientoEppRopa,
  BotasGuantes,
  EquipamientoEppOtros,
  Herramientas,
  LogisticaVehiculos,
  AlimentacionYbebidas,
  LogisticaYEquipoDeCampo,
  LimpiezaPersonal,
  LimpiezaGeneral,
  Medicamentos,
  RescateAnimal,
];

// Nombres de las claves para cada sección del formulario
const stepKeys = [
  'datosBrigada',
  'equipamientoEppRopa',
  'botasGuantes',
  'equipamientoEppOtros',
  'herramientas',
  'logisticaVehiculos',
  'alimentacionYbebidas',
  'logisticaYEquipoDeCampo',
  'limpiezaPersonal',
  'limpiezaGeneral',
  'medicamentos',
  'rescateAnimal',
];

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const totalSteps = stepsComponents.length;

  const handleNextStep = (data) => {
    const currentStepKey = stepKeys[currentStep - 1];
    setFormData((prevData) => ({ 
      ...prevData, 
      [currentStepKey]: data 
    }));
    
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      const finalData = { ...formData, [currentStepKey]: data };
      console.log("¡Formulario Completo! Datos finales:", finalData);
      
      // Aquí es donde harás la llamada a la API de tu compañero:
      // fetch('URL_DE_LA_API_DE_TU_COMPAÑERO', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(finalData),
      // })
      // .then(response => response.json())
      // .then(data => console.log('Éxito:', data))
      // .catch((error) => console.error('Error al enviar:', error));

      alert("Formulario enviado (simulado). Revisa la consola.");
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const StepComponent = stepsComponents[currentStep - 1];
  const currentStepKey = stepKeys[currentStep - 1];
  const currentStepData = formData[currentStepKey] || {};

  return (
    <div className="app-layout">
      <StepIndicator currentStep={currentStep} />
      <div className="form-content-area">
        <div className="form-card">
          {StepComponent ? (
            <StepComponent 
              onNext={handleNextStep} 
              onPrevious={handlePreviousStep} 
              data={currentStepData} 
              isLastStep={currentStep === totalSteps}
              currentStep={currentStep}
            />
          ) : (
            <div>Error: Paso no encontrado</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;