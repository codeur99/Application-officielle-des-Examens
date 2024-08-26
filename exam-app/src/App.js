import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LogInForm from './pages/LogInForm';
import ExamPage from './pages/ExamPage';
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Par défaut, rediriger vers la page de connexion */}
          <Route path="/" element={<Navigate to="/login" />} />
          
          {/* Route pour la connexion */}
          <Route path="/login" element={<LogInForm />} />
          
          {/* Route pour le test (accessed after login) */}
          <Route path="/exam" element={<ExamPage />} />
          
          {/* Redirection pour toute autre route non définie */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
