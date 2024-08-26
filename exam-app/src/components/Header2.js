import React, { useState } from 'react';
import Header2 from '../components/Header2';

function EvaluationTable() {
  const [qualitativeRatings, setQualitativeRatings] = useState({});
  const [comments, setComments] = useState({});

  const handleQualitativeChange = (index, value) => {
    setQualitativeRatings({
      ...qualitativeRatings,
      [index]: value,
    });
  };

  const handleCommentChange = (index, value) => {
    setComments({
      ...comments,
      [index]: value,
    });
  };

  return (
    <div style={{ width: '100%' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <Header2 />
          </tr>
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
          {/* Ajoutez les autres lignes du tableau ici */}
        </tbody>
      </table>
    </div>
  );
}

export default EvaluationTable;
