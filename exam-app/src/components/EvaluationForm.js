import React from 'react';
import EvaluationTable from './EvaluationTable';

function EvaluationForm() {
  return (
    <div>
        

      <EvaluationTable />

      <p style={{ fontSize: '0.9em', marginTop: '10px' }}>
        * Reporter la note qui correspond à votre choix : Pas du tout satisfait - Peu satisfait - Plutôt satisfait - Très satisfait
      </p>
      <p style={{ fontSize: '0.9em' }}>
        Veuillez retourner cette fiche au Service Ressources Humaines (Section Formation) dans les meilleurs délais.
      </p>
      <p style={{ fontSize: '0.9em' }}>
        EN RH 05 Indice 02A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Révision : 07/10/2020
      </p>
    </div>

  );
}

export default EvaluationForm;
