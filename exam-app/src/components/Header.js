import React from 'react';
import '../components/Header.css';
import comilogLogo from '../assets/comilog-logo.png'; // Import du logo

const ExamPage = () => {
  return (
    <div>
      {/* Header placé en haut */}
      <div className="header">
        <div className="left">
          <img src={comilogLogo} alt="Comilog Logo" />
        </div>
        <div className="center">
          <div>ENREGISTREMENT HYGIÈNE SANTÉ SÉCURITÉ AU TRAVAIL</div>
          <div>ENGAGEMENT SÉCURITÉ</div>
        </div>
        <div className="right">
          <div>EN SMS 01 04</div>
          <div>Indice 01 A</div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="exam-container ios-style bordure">
        <div>
          <h3>QUESTIONNAIRE EVALUATION INDUCTION D'IMMERSION À LA SÉCURITÉ J1</h3>
        </div>
        <div className="sub-header">
          <div className="left">
            <div>Nom & Prénoms:</div>
            <div>Entreprise:</div>
          </div>
          <div className="center">
            <div
              style={{
                border: '1px solid #000',
                padding: '5px',
                borderRadius: '50%',
                width: '50px',
                margin: '0 auto',
              }}
              className="bordure"
            >
              /20
            </div>
          </div>
          <div className="right">
            <div>Date:</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
