import React, { useState } from 'react';
import Header2 from '../components/Header2';


function EvaluationTable() {
  // États pour stocker les valeurs des champs
  const [qualitativeRatings, setQualitativeRatings] = useState({});
  const [comments, setComments] = useState({});

  // Gestion des changements pour les champs d'appréciation qualitative
  const handleQualitativeChange = (index, value) => {
    setQualitativeRatings({
      ...qualitativeRatings,
      [index]: value,
    });
  };

  // Gestion des changements pour les champs de commentaires
  const handleCommentChange = (index, value) => {
    setComments({
      ...comments,
      [index]: value,
    });
  };

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>

              <Header2/>

        <tr>
          <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }} colSpan="2">DÉROULEMENT DE LA FORMATION</th>
          <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>APPRÉCIATION QUALITATIVE</th>
          <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>COMMENTAIRES</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid black', padding: '8px' }} colSpan="2">
            <strong>NOTATION (de 1 à 4) :</strong><br />
            1. Pas du tout satisfait<br />
            2. Peu satisfait<br />
            3. Plutôt satisfait<br />
            4. Très satisfait
          </td>
          <td style={{ border: '1px solid black', padding: '8px' }}>
            {/* Ici, l'utilisateur peut entrer une note de 1 à 4 */}
            <input
              type="number"
              min="1"
              max="4"
              value={qualitativeRatings[0] || ''}
              onChange={(e) => handleQualitativeChange(0, e.target.value)}
              style={{ width: '100%' }}
            />
          </td>
          <td style={{ border: '1px solid black', padding: '8px' }}>
            <textarea
              value={comments[0] || ''}
              onChange={(e) => handleCommentChange(0, e.target.value)}
              style={{ width: '100%' }}
            />
          </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid black', padding: '8px' }}>Objectifs du cours :</td>
          <td style={{ border: '1px solid black', padding: '8px' }}>Les objectifs du cours répondent à mes besoins professionnels</td>
          <td style={{ border: '1px solid black', padding: '8px' }}>
            <input
              type="number"
              min="1"
              max="4"
              value={qualitativeRatings[1] || ''}
              onChange={(e) => handleQualitativeChange(1, e.target.value)}
              style={{ width: '100%' }}
            />
          </td>
          <td style={{ border: '1px solid black', padding: '8px' }}>
            <textarea
              value={comments[1] || ''}
              onChange={(e) => handleCommentChange(1, e.target.value)}
              style={{ width: '100%' }}
            />
          </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid black', padding: '8px' }}>Structure du cours :</td>
          <td style={{ border: '1px solid black', padding: '8px' }}>Organisation du temps, rythme de formation, mise en pratique</td>
          <td style={{ border: '1px solid black', padding: '8px' }}>
            <input
              type="number"
              min="1"
              max="4"
              value={qualitativeRatings[2] || ''}
              onChange={(e) => handleQualitativeChange(2, e.target.value)}
              style={{ width: '100%' }}
            />
          </td>
          <td style={{ border: '1px solid black', padding: '8px' }}>
            <textarea
              value={comments[2] || ''}
              onChange={(e) => handleCommentChange(2, e.target.value)}
              style={{ width: '100%' }}
            />
          </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid black', padding: '8px' }}>Qualité du formateur :</td>
          <td style={{ border: '1px solid black', padding: '8px' }}>Connaissances ou techniques apportées, réponses aux questions, qualité de l'animation, l'écoute...</td>
          <td style={{ border: '1px solid black', padding: '8px' }}>
            <input
              type="number"
              min="1"
              max="4"
              value={qualitativeRatings[3] || ''}
              onChange={(e) => handleQualitativeChange(3, e.target.value)}
              style={{ width: '100%' }}
            />
          </td>
          <td style={{ border: '1px solid black', padding: '8px' }}>
            <textarea
              value={comments[3] || ''}
              onChange={(e) => handleCommentChange(3, e.target.value)}
              style={{ width: '100%' }}
            />
          </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid black', padding: '8px' }}>Supports de cours :</td>
          <td style={{ border: '1px solid black', padding: '8px' }}>Bonne présentation, qualité du texte et des illustrations, facile à consulter...</td>
          <td style={{ border: '1px solid black', padding: '8px' }}>
            <input
              type="number"
              min="1"
              max="4"
              value={qualitativeRatings[4] || ''}
              onChange={(e) => handleQualitativeChange(4, e.target.value)}
              style={{ width: '100%' }}
            />
          </td>
          <td style={{ border: '1px solid black', padding: '8px' }}>
            <textarea
              value={comments[4] || ''}
              onChange={(e) => handleCommentChange(4, e.target.value)}
              style={{ width: '100%' }}
            />
          </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid black', padding: '8px' }}>Logistique :</td>
          <td style={{ border: '1px solid black', padding: '8px' }}>Accueil, salle, matériel utilisé, repas et pauses café</td>
          <td style={{ border: '1px solid black', padding: '8px' }}>
            <input
              type="number"
              min="1"
              max="4"
              value={qualitativeRatings[5] || ''}
              onChange={(e) => handleQualitativeChange(5, e.target.value)}
              style={{ width: '100%' }}
            />
          </td>
          <td style={{ border: '1px solid black', padding: '8px' }}>
            <textarea
              value={comments[5] || ''}
              onChange={(e) => handleCommentChange(5, e.target.value)}
              style={{ width: '100%' }}
            />
          </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid black', padding: '8px' }} colSpan="2">Autres commentaires/Suggestions</td>
          <td style={{ border: '1px solid black', padding: '8px' }} colSpan="2">
            <textarea
              value={comments[6] || ''}
              onChange={(e) => handleCommentChange(6, e.target.value)}
              style={{ width: '100%' }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default EvaluationTable;
