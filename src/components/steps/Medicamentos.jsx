import React, { useState } from 'react';

const Medicamentos = ({ onNext, onPrevious, data }) => {
  const [stepData, setStepData] = useState({
    aguaDestilada: data.aguaDestilada || '',
    aguaOxigenada: data.aguaOxigenada || '',
    alcohol: data.alcohol || '',
    algodon: data.algodon || '',
    amoxicilina1G: data.amoxicilina1G || '',
    bacitracinaNeomicinaPomada: data.bacitracinaNeomicinaPomada || '',
    branula18: data.branula18 || '',
    ciprofloxacino1G: data.ciprofloxacino1G || '',
    complejoB10000U: data.complejoB10000U || '',
    dexametasona4Mg: data.dexametasona4Mg || '',
    diclofenaco50Mgs: data.diclofenaco50Mgs || '',
    diclofenaco75Mgs: data.diclofenaco75Mgs || '',
    equipoDeVenoclisis: data.equipoDeVenoclisis || '',
    gasas: data.gasas || '',
    gentamicinaColirio: data.gentamicinaColirio || '',
    hidrocortisona500MgsAmpolla: data.hidrocortisona500MgsAmpolla || '',
    ibuprofeno600Comp: data.ibuprofeno600Comp || '',
    ibuprofeno200MgsJarabe: data.ibuprofeno200MgsJarabe || '',
    jeringas5Ml: data.jeringas5Ml || '',
    loratadina10Mgs: data.loratadina10Mgs || '',
    nafazolinaColirio: data.nafazolinaColirio || '',
    paracetamol100MgsJarabe: data.paracetamol100MgsJarabe || '',
    paracetamol500Mgs: data.paracetamol500Mgs || '',
    povidonaYodada100Ml: data.povidonaYodada100Ml || '',
    quemacuranPomada: data.quemacuranPomada || '',
    refrianexComprimidos: data.refrianexComprimidos || '',
    rifamicinaSpray: data.rifamicinaSpray || '',
    salbutamol: data.salbutamol || '',
    salesDeRehidratacion: data.salesDeRehidratacion || '',
    sertalCompuesto: data.sertalCompuesto || '',
    sueroDextrosa05: data.sueroDextrosa05 || '',
    sueroFisiologico: data.sueroFisiologico || '',
    tabletasPotabilizadoras: data.tabletasPotabilizadoras || '',
    barbijos: data.barbijos || '',
    tanqueOxigeno: data.tanqueOxigeno || '',
    fluidimed: data.fluidimed || '',
    repelente: data.repelente || '',
    talcoParaPies: data.talcoParaPies || '',
    cremaParaAescaldadura: data.cremaParaAescaldadura || '',
    nebulizador: data.nebulizador || '',
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
      <h2>Décima Primera Sección: Medicamentos</h2>

      <div className="form-fields-grid">
        {Object.keys(stepData).filter(key => key !== 'observaciones').map(key => (
          <div key={key} className="form-field" style={{ gridColumn: 'span 1' }}>
            <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').toUpperCase().replace('MG', ' MG').replace('ML', ' ML').replace('G', ' G')}</label>
            <input
              type="number"
              id={key}
              name={key}
              value={stepData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
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

export default Medicamentos;