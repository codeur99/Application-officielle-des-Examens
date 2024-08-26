import React from 'react';
import { Link } from 'react-router-dom';

const StartButton = () => (
  <div className="text-center mb-4">
    <h3>Commencez maintenant</h3>
    <p>Accédez aux différents questionnaires et outils pour vous former.</p>
    <Link to="/exam" className="btn btn-primary">Commencer l'évaluation</Link>
  </div>
);

export default StartButton;
