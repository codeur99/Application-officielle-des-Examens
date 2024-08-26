import React from 'react';
import Header from '../components/Header';
import '../pages/ExamPage.css'; 

const Form1 = () => {
  return (
    <div className="exam-container ios-style">


      {/* Première feuille */}
      <section className="evaluation">

      <Header />

        <table className="table ios-table">
          <thead>
            <tr>
              <th style={{ color: 'red' }} className="bordure">
                Critère de la réussite : obtention d'une note mini de 12/20
              </th>
              <th>Réponse</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bordure">
              <td className="bordure">1. Je peux consulter un HSE en cas de problèmes de sécurité</td>
              <tr>
                <td>
                  <div className="ios-radio-group">
                    <label>
                      <input type="radio" name="question1" value="vrai" className="ios-radio"  /> Vrai
                    </label>
                    <label className="ml-4"> 
                      <input type="radio" name="question1" value="faux" className="ios-radio" /> Faux
                    </label>
                    <span className="point">1pt</span>
                  </div>
                </td>
              </tr>
            </tr>
            <tr className="bordure">
              <td className="bordure">2. Le manganèse est transporté vers Owendo par Dumper</td>
              <td>
                <div className="ios-radio-group">
                  <label>
                    <input type="radio" name="question2" value="vrai" className="ios-radio" /> Vrai
                  </label>
                  <label className="ml-4">
                    <input type="radio" name="question2" value="faux" className="ios-radio" /> Faux
                  </label>
                  <span className="point">1pt</span>
                </div>
              </td>
            </tr>
            <tr className="bordure">
              <td className="bordure">3. L'induction sécurité est obligatoire pour les sous-traitants</td>
              <td>
                <div className="ios-radio-group">
                  <label>
                    <input type="radio" name="question3" value="vrai" className="ios-radio" /> Vrai
                  </label>
                  <label className="ml-4">
                    <input type="radio" name="question3" value="faux" className="ios-radio" /> Faux
                  </label>
                  <span className="point">1pt</span>
                </div>
              </td>
            </tr>
            <tr className="bordure">
              <td className="bordure">4. Seuls les véhicules avec gyrophares bleus sont prioritaires</td>
              <td>
                <div className="ios-radio-group">
                  <label>
                    <input type="radio" name="question4" value="vrai" className="ios-radio" /> Vrai
                  </label>
                  <label className="ml-4">
                    <input type="radio" name="question4" value="faux" className="ios-radio" /> Faux
                  </label>
                  <span className="point">1pt</span>
                </div>
              </td>
            </tr>
            <tr className="bordure">
              <td className="bordure">5. En cas d’incendie, on peut utiliser n’importe quel extincteur</td>
              <td>
                <div className="ios-radio-group">
                  <label>
                    <input type="radio" name="question5" value="vrai" className="ios-radio" /> Vrai
                  </label>
                  <label className="ml-4">
                    <input type="radio" name="question5" value="faux" className="ios-radio" /> Faux
                  </label>
                  <span className="point">1pt</span>
                </div>
              </td>
            </tr>
            <tr className="bordure">
              <td className="bordure">6. Les ÉPI sont obligatoires sur tous les sites industriels</td>
              <td>
                <div className="ios-radio-group">
                  <label>
                    <input type="radio" name="question6" value="vrai" className="ios-radio" /> Vrai
                  </label>
                  <label className="ml-4">
                    <input type="radio" name="question6" value="faux" className="ios-radio" /> Faux
                  </label>
                  <span className="point">1pt</span>
                </div>
              </td>
            </tr>
            <tr className="bordure">
              <td className="bordure">7. La consommation d’alcool est autorisée uniquement le weekend</td>
              <td>
                <div className="ios-radio-group">
                  <label>
                    <input type="radio" name="question7" value="vrai" className="ios-radio" /> Vrai
                  </label>
                  <label className="ml-4">
                    <input type="radio" name="question7" value="faux" className="ios-radio" /> Faux
                  </label>
                  <span className="point">1pt</span>
                </div>
              </td>
            </tr>
            <tr className="bordure">
              <td className="bordure">8. Je peux faire un AVC dans la mine si j’ai des symptômes</td>
              <td>
                <div className="ios-radio-group">
                  <label>
                    <input type="radio" name="question8" value="vrai" className="ios-radio" /> Vrai
                  </label>
                  <label className="ml-4">
                    <input type="radio" name="question8" value="faux" className="ios-radio" /> Faux
                  </label>
                  <span className="point">1pt</span>
                </div>
              </td>
            </tr>
            <tr className="bordure">
              <td className="bordure">9. L'utilisation de la ceinture est obligatoire dans tous les véhicules</td>
              <td>
                <div className="ios-radio-group">
                  <label>
                    <input type="radio" name="question9" value="vrai" className="ios-radio" /> Vrai
                  </label>
                  <label className="ml-4">
                    <input type="radio" name="question9" value="faux" className="ios-radio" /> Faux
                  </label>
                  <span className="point">1pt</span>
                </div>
              </td>
            </tr>
            <tr className="bordure">
              <td className="bordure">10. Le port des lunettes de sécurité est obligatoire pour les visiteurs sur le site</td>
              <td>
                <div className="ios-radio-group">
                  <label>
                    <input type="radio" name="question10" value="vrai" className="ios-radio" /> Vrai
                  </label>
                  <label className="ml-4">
                    <input type="radio" name="question10" value="faux" className="ios-radio" /> Faux
                  </label>
                  <span className="point">1pt</span>
                </div>
              </td>
            </tr>
            <tr className="bordure">
              <td className="bordure">11. En cas de contact avec une substance chimique, je dois me rincer immédiatement avec de l'eau</td>
              <td>
                <div className="ios-radio-group">
                  <label>
                    <input type="radio" name="question11" value="vrai" className="ios-radio" /> Vrai
                  </label>
                  <label className="ml-4">
                    <input type="radio" name="question11" value="faux" className="ios-radio" /> Faux
                  </label>
                  <span className="point">1pt</span>
                </div>
              </td>
            </tr>
            <tr className="bordure">
              <td className="bordure">12. Seules les équipes autorisées peuvent manipuler les produits chimiques</td>
              <td>
                <div className="ios-radio-group">
                  <label>
                    <input type="radio" name="question12" value="vrai" className="ios-radio" /> Vrai
                  </label>
                  <label className="ml-4">
                    <input type="radio" name="question12" value="faux" className="ios-radio" /> Faux
                  </label>
                  <span className="point">1pt</span>
                </div>
              </td>
            </tr>
            <tr className="bordure">
              <td className="bordure">13. Le port de gants est obligatoire pour toutes les tâches sur le site</td>
              <td>
                <div className="ios-radio-group">
                  <label>
                    <input type="radio" name="question13" value="vrai" className="ios-radio" /> Vrai
                  </label>
                  <label className="ml-4">
                    <input type="radio" name="question13" value="faux" className="ios-radio" /> Faux
                  </label>
                  <span className="point">1pt</span>
                </div>
              </td>
            </tr>
            <tr className="bordure">
              <td className="bordure">14. Il est obligatoire de suivre les consignes de sécurité affichées sur le site</td>
              <td>
                <div className="ios-radio-group">
                  <label>
                    <input type="radio" name="question14" value="vrai" className="ios-radio" /> Vrai
                  </label>
                  <label className="ml-4">
                    <input type="radio" name="question14" value="faux" className="ios-radio" /> Faux
                  </label>
                  <span className="point">1pt</span>
                </div>
              </td>
            </tr>
            <tr className="bordure">
              <td className="bordure">15. En cas de situation dangereuse, je dois immédiatement alerter un superviseur</td>
              <td>
                <div className="ios-radio-group">
                  <label>
                    <input type="radio" name="question15" value="vrai" className="ios-radio" /> Vrai
                  </label>
                  <label className="ml-4">
                    <input type="radio" name="question15" value="faux" className="ios-radio" /> Faux
                  </label>
                  <span className="point">1pt</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Form1;
