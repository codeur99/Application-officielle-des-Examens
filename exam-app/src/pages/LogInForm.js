import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogInForm.css';
import logo from '../assets/comilog-logo.png';
import { UserContext } from '../UserContext';

const LogInForm = () => {
  const [matricule, setMatricule] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!matricule || !accessCode) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      if (
        matricule === storedUser.matricule &&
        accessCode === storedUser.accessCode
      ) {
        setUser(storedUser);
        navigate('/exam');  // Redirection vers la page de test
      } else {
        setError('Matricule ou code d\'accès incorrect.');
      }
    } else {
      setError('Aucun utilisateur trouvé.');
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <img src={logo} alt="COMILOG Logo" className="app-logo" />
        <p className="app-subtitle">
          <span className="ds">DS</span>
          <span className="immersion">Immersion</span>
        </p>
        <p className="app-title">Application Officielle des Examens</p>
      </header>

      <main className="app-main">
        <form className="app-form" onSubmit={handleSubmit}>
          <label htmlFor="matricule">Matricule</label>
          <input
            type="text"
            id="matricule"
            name="matricule"
            value={matricule}
            onChange={(e) => setMatricule(e.target.value)}
          />

          <label htmlFor="accessCode">Code d'accès</label>
          <input
            type="text"
            id="accessCode"
            name="accessCode"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="boutton-se-connecter">Se connecter</button>
        </form>
      </main>
    </div>
  );
};

export default LogInForm;
