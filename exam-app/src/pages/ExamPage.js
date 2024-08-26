import React from 'react';
import './ExamPage.css';
import Form1 from '../components/Form1';
import Form2 from '../components/Form2';
import Form3 from '../components/Form3';


const ExamPage = () => {
  return (
    <div className="exam-container ios-style">

      {/* Première feuille */}
      <section className="evaluation">
        <Form1 />
      </section>


      {/* Deuxième feuille */}
      <section className="evaluation">
      <Form2 />
      </section>


      {/* Troisième feuille */}
      <section className="evaluation"> 
        <Form3 />
      </section>


    </div>
  );
}

export default ExamPage;
