import React from 'react';
import Header2 from '../components/Header2';
import '../pages/ExamPage.css'; 
import EvaluationForm from './EvaluationForm';

const Form3 = () => {
  return (
    <div className="exam-container ios-style separator">

      {/* Troisième feuille */}

      <section className="evaluation" style={{ marginTop: '40px' }}>
      
      <Header2/>

      <EvaluationForm />

      </section>
      
      
    </div>
  );
}

export default Form3;
