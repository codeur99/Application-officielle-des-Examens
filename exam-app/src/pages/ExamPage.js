import React from 'react';
import './ExamPage.css';
import comilogLogo from '../assets/comilog-logo.png'; // Import du logo
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const ExamPage = () => {

  const handlePrint = () => {
    window.print(); // Fonction pour imprimer la page
  };

  return (
    <div>
      
      <Container className="border-A">
        <Row className="border-A">
          <Col>
            <div>
              <img className="image-logo" src={comilogLogo} alt="Comilog Logo" />
            </div>
          </Col>
          <Col>
            <Container>
              <Row className="border-A text-center">
                ENREGISTREMENT HYGIÈNE SANTÉ SÉCURITÉ AU TRAVAIL
              </Row>
              <Row className="border-A text-center">
                ENGAGEMENT SÉCURITÉ
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
              <Row>
                EN SMS 01 04
              </Row>
              <Row>
                DS
              </Row>
              <Row>
                Indice 01 A
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container className="border-A mt-4">
        <Row className="text-center">
          <h3>QUESTIONNAIRE EVALUATION INDUCTION D'IMMERSION À LA SÉCURITÉ J1</h3>
        </Row>
        <Row className="border-A">
          <Col>
            <div>Nom & Prénoms:</div>
            <div>Entreprise:</div>
          </Col>
          <Col>
            <div>Lebomo jessy</div>
            <div>comilog</div>
          </Col>
          <Col>
            <div>Note: /20</div>
          </Col>
          <Col>
            <div>Date:</div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <h6>
              Critère de la réussite : obtention d'une note minimun de 12/20
            </h6>
          </Col>

          <Col className="border-A text-center">
            <p>Réponses</p>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              1. Je peux consulter un HSE en cas de problème de sécurité
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question1" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question1" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">1pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              2. Le manganèse est transporté vers Owendo par Dumper
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question2" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question2" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">1pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              3. L'induction sécurité est obligatoire uniquement pour les sous-traitants
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question3" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question3" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">1pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>4. Choisir les 3 volets de la politique sécurité COMILOG :</p>
            <ul className="list-inline">
              <li className="list-inline-item">a) Prévention</li>
              <li className="list-inline-item">b) Engagement</li>
              <li className="list-inline-item">c) Urgence</li>
              <li className="list-inline-item">d) Implication</li>
              <li className="list-inline-item">e) Efficacité</li>
            </ul>
          </Col>

          <Col className="border-A text-center">
            <span className="point mt-3 d-block">3pts</span>
            <div className="ios-radio-group d-flex justify-content-around">
              <label>
                <input type="radio" name="question4" value="prevention" className="ios-radio" /> Prévention
              </label>
              <label>
                <input type="radio" name="question4" value="engagement" className="ios-radio" /> Engagement
              </label>
              <label>
                <input type="radio" name="question4" value="urgence" className="ios-radio" /> Urgence
              </label>
              <label>
                <input type="radio" name="question4" value="implication" className="ios-radio" /> Implication
              </label>
              <label>
                <input type="radio" name="question4" value="efficacite" className="ios-radio" /> Efficacité
              </label>
            </div>
          </Col>

        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              5. La ceinture de sécurité est obligatoire seulement pour le chauffeur
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question5" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question5" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">1pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              6. L'usage du téléphone, le casque, les écouteurs est strictement interdit au volant et pour certains travaux de levage sur l'ensemble et sur les chantiers sur les sites Comilog
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question6" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question6" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">1pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>7. Choisir les 3 volets de la politique sécurité COMILOG :</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <img src="path/to/image-a.png" alt="Image A" className="image-option" />
                a) CIM
              </li>
              <li className="list-inline-item">
                <img src="path/to/image-b.png" alt="Image B" className="image-option" />
                b) Montée de la zone Industrielle
              </li>
              <li className="list-inline-item">
                <img src="path/to/image-c.png" alt="Image C" className="image-option" />
                c) Les Carrières
              </li>
              <li className="list-inline-item">
                <img src="path/to/image-d.png" alt="Image D" className="image-option" />
                d) Cité cadres
              </li>
            </ul>
          </Col>


          <Col className="border-A text-center">
            <span className="point mt-3 d-block">3pts</span>
            <div className="ios-radio-group d-flex justify-content-around">
              <label>
                <input type="radio" name="question7" value="prevention" className="ios-radio" /> CIM
              </label>
              <label>
                <input type="radio" name="question7" value="engagement" className="ios-radio" /> Montée de la zone Industrielle
              </label>
              <label>
                <input type="radio" name="question7" value="urgence" className="ios-radio" /> Les Carrières
              </label>
              <label>
                <input type="radio" name="question7" value="implication" className="ios-radio" /> Cité cadres
              </label>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              8. Écouter de la musique en marchant sur les pistes d'accès aux usines, bureaux, zones de travail ou en travaillant est autorisé sur les sites Comilog
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question8" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question8" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">2pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>9. Choisir 3 comportements Sécuritaire :</p>
            <ul className="list-inline">
              <li className="list-inline-item">a) Communiquer</li>
              <li className="list-inline-item">b) Courir</li>
              <li className="list-inline-item">c) Observer</li>
              <li className="list-inline-item">d) Se précipiter</li>
              <li className="list-inline-item">d) Se concentrer</li>
            </ul>
          </Col>

          <Col className="border-A text-center">
            <span className="point mt-3 d-block">3pts</span>
            <div className="ios-radio-group d-flex justify-content-around">
              <label>
                <input type="radio" name="question9" value="prevention" className="ios-radio" />Communiquer
              </label>
              <label>
                <input type="radio" name="question9" value="engagement" className="ios-radio" /> Courir
              </label>
              <label>
                <input type="radio" name="question9" value="urgence" className="ios-radio" /> Observer
              </label>
              <label>
                <input type="radio" name="question9" value="implication" className="ios-radio" /> Se précipiter
              </label>
              <label>
                <input type="radio" name="question9" value="implication" className="ios-radio" /> Se concentrer
              </label>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              10. Je peux fumer où bon me semble sur les sites Comilog
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question10" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question10" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">2pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              11. Cocher l'image montrant un point de rassemblement
            </p>
            <div className="image-container">
              <img src="path/to/image-a.png" alt="Image A" className="image-option" />
              <img src="path/to/image-b.png" alt="Image B" className="image-option" />
              <img src="path/to/image-c.png" alt="Image C" className="image-option" />
            </div>
          </Col>


          <Col className="border-A text-center">
            <span className="point mt-3 d-block">3pts</span>
            <div className="ios-radio-group d-flex justify-content-around">
              <label>
                <input type="radio" name="question9" value="prevention" className="ios-radio" />A
              </label>
              <label>
                <input type="radio" name="question9" value="engagement" className="ios-radio" /> B
              </label>
              <label>
                <input type="radio" name="question9" value="urgence" className="ios-radio" /> C
              </label>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              12. Le rangement et le nettoyage de ma zone de travail est de la responsabilité de la société de nettoyage, pas la mienne
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question11" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question11" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">2pt</span>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Boutons d'action */}
      <div className="button-container">
        <button className="btn-print" onClick={handlePrint}>Imprimer</button>
        <button className="btn-submit">Soumettre</button>
      </div>

      <Container className="border-A mt-4">
        <Row className="border-A">
          <Col>
            <div>
              <img className="image-logo" src={comilogLogo} alt="Comilog Logo" />
            </div>
          </Col>
          <Col>
            <Container>
              <Row className="border-A text-center">
                ENREGISTREMENT HYGIÈNE SANTÉ SÉCURITÉ AU TRAVAIL
              </Row>
              <Row className="border-A text-center">
                ENGAGEMENT SÉCURITÉ
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
              <Row>
                EN SMS 01 04
              </Row>
              <Row>
                DS
              </Row>
              <Row>
                Indice 01 A
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container className="border-A mt-4">
        <Row className="text-center">
          <h3>QUESTIONNAIRE EVALUATION INDUCTION D'IMMERSION À LA SÉCURITÉ J1</h3>
        </Row>
        <Row className="border-A">
          <Col>
            <div>Nom & Prénoms:</div>
            <div>Entreprise:</div>
          </Col>
          <Col>
            <div>Lebomo jessy</div>
            <div>comilog</div>
          </Col>
          <Col>
            <div>Note: /20</div>
          </Col>
          <Col>
            <div>Date:</div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <h6>
              Critère de la réussite : obtention d'une note minimun de 12/20
            </h6>
          </Col>

          <Col className="border-A text-center">
            <p>Réponses</p>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              1. Je peux consulter un HSE en cas de problème de sécurité
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question1" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question1" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">1pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              2. Le manganèse est transporté vers Owendo par Dumper
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question2" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question2" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">1pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              3. L'induction sécurité est obligatoire uniquement pour les sous-traitants
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question3" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question3" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">1pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>4. Choisir les 3 volets de la politique sécurité COMILOG :</p>
            <ul className="list-inline">
              <li className="list-inline-item">a) Prévention</li>
              <li className="list-inline-item">b) Engagement</li>
              <li className="list-inline-item">c) Urgence</li>
              <li className="list-inline-item">d) Implication</li>
              <li className="list-inline-item">e) Efficacité</li>
            </ul>
          </Col>

          <Col className="border-A text-center">
            <span className="point mt-3 d-block">3pts</span>
            <div className="ios-radio-group d-flex justify-content-around">
              <label>
                <input type="radio" name="question4" value="prevention" className="ios-radio" /> Prévention
              </label>
              <label>
                <input type="radio" name="question4" value="engagement" className="ios-radio" /> Engagement
              </label>
              <label>
                <input type="radio" name="question4" value="urgence" className="ios-radio" /> Urgence
              </label>
              <label>
                <input type="radio" name="question4" value="implication" className="ios-radio" /> Implication
              </label>
              <label>
                <input type="radio" name="question4" value="efficacite" className="ios-radio" /> Efficacité
              </label>
            </div>
          </Col>

        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              5. La ceinture de sécurité est obligatoire seulement pour le chauffeur
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question5" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question5" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">1pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              6. L'usage du téléphone, le casque, les écouteurs est strictement interdit au volant et pour certains travaux de levage sur l'ensemble et sur les chantiers sur les sites Comilog
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question6" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question6" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">1pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>7. Choisir les 3 volets de la politique sécurité COMILOG :</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <img src="path/to/image-a.png" alt="Image A" className="image-option" />
                a) CIM
              </li>
              <li className="list-inline-item">
                <img src="path/to/image-b.png" alt="Image B" className="image-option" />
                b) Montée de la zone Industrielle
              </li>
              <li className="list-inline-item">
                <img src="path/to/image-c.png" alt="Image C" className="image-option" />
                c) Les Carrières
              </li>
              <li className="list-inline-item">
                <img src="path/to/image-d.png" alt="Image D" className="image-option" />
                d) Cité cadres
              </li>
            </ul>
          </Col>


          <Col className="border-A text-center">
            <span className="point mt-3 d-block">3pts</span>
            <div className="ios-radio-group d-flex justify-content-around">
              <label>
                <input type="radio" name="question7" value="prevention" className="ios-radio" /> CIM
              </label>
              <label>
                <input type="radio" name="question7" value="engagement" className="ios-radio" /> Montée de la zone Industrielle
              </label>
              <label>
                <input type="radio" name="question7" value="urgence" className="ios-radio" /> Les Carrières
              </label>
              <label>
                <input type="radio" name="question7" value="implication" className="ios-radio" /> Cité cadres
              </label>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              8. Écouter de la musique en marchant sur les pistes d'accès aux usines, bureaux, zones de travail ou en travaillant est autorisé sur les sites Comilog
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question8" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question8" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">2pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>9. Choisir 3 comportements Sécuritaire :</p>
            <ul className="list-inline">
              <li className="list-inline-item">a) Communiquer</li>
              <li className="list-inline-item">b) Courir</li>
              <li className="list-inline-item">c) Observer</li>
              <li className="list-inline-item">d) Se précipiter</li>
              <li className="list-inline-item">d) Se concentrer</li>
            </ul>
          </Col>

          <Col className="border-A text-center">
            <span className="point mt-3 d-block">3pts</span>
            <div className="ios-radio-group d-flex justify-content-around">
              <label>
                <input type="radio" name="question9" value="prevention" className="ios-radio" />Communiquer
              </label>
              <label>
                <input type="radio" name="question9" value="engagement" className="ios-radio" /> Courir
              </label>
              <label>
                <input type="radio" name="question9" value="urgence" className="ios-radio" /> Observer
              </label>
              <label>
                <input type="radio" name="question9" value="implication" className="ios-radio" /> Se précipiter
              </label>
              <label>
                <input type="radio" name="question9" value="implication" className="ios-radio" /> Se concentrer
              </label>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              10. Je peux fumer où bon me semble sur les sites Comilog
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question10" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question10" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">2pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              11. Cocher l'image montrant un point de rassemblement
            </p>
            <div className="image-container">
              <img src="path/to/image-a.png" alt="Image A" className="image-option" />
              <img src="path/to/image-b.png" alt="Image B" className="image-option" />
              <img src="path/to/image-c.png" alt="Image C" className="image-option" />
            </div>
          </Col>


          <Col className="border-A text-center">
            <span className="point mt-3 d-block">3pts</span>
            <div className="ios-radio-group d-flex justify-content-around">
              <label>
                <input type="radio" name="question9" value="prevention" className="ios-radio" />A
              </label>
              <label>
                <input type="radio" name="question9" value="engagement" className="ios-radio" /> B
              </label>
              <label>
                <input type="radio" name="question9" value="urgence" className="ios-radio" /> C
              </label>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              12. Le rangement et le nettoyage de ma zone de travail est de la responsabilité de la société de nettoyage, pas la mienne
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question11" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question11" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">2pt</span>
            </div>
          </Col>
        </Row>
        {/* Boutons d'action */}
        <div className="button-container">
          <button className="btn-print" onClick={handlePrint}>Imprimer</button>
          <button className="btn-submit">Soumettre</button>
        </div>
      </Container>
    </div>
  );
};

export default ExamPage;
