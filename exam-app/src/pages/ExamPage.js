import React from 'react';
import './ExamPage.css';
import comilogLogo from '../assets/comilog-logo.png'; // Import du logo
import LogoEramet from '../assets/logo-eramet.png'; // Import du logo
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageA from '../assets/image-panneau-20.png';
import ImageB from '../assets/image-panneau-50.png';
import ImageC from '../assets/image-panneau-40.png';
import ImageD from '../assets/image-panneau-30.png';
// Import image
import Image1 from '../assets/image-panneau-sortie.png';
import Image2 from '../assets/image-panneau-rassemblement.png';
import Image3 from '../assets/image-panneau-sortie_de_secours.png';
import ImageQuestion1 from '../assets/image_question_1.jpg';



const ExamPage = () => {

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
        <Row className="text-center border-A">
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
            <div className="color">Note: /20</div>
          </Col>
          <Col>
            <div>Date:</div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <h6 className="color">
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
              <span className="point m-3">2pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">

          <Col className="border-A">
            <p>7. Choisir les 3 volets de la politique sécurité COMILOG :</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <img src={ImageA} alt="CIM" className="image-option images-panneaux " />
                a) CIM
              </li>
              <li className="list-inline-item">
                <img src={ImageB} alt="Montée de la zone Industrielle" className="image-option images-panneaux " />
                b) Montée de la zone Industrielle
              </li>
              <li className="list-inline-item">
                <img src={ImageC} alt="Les Carrières" className="image-option images-panneaux " />
                c) Les Carrières
              </li>
              <li className="list-inline-item">
                <img src={ImageD} alt="Cité cadres" className="image-option images-panneaux " />
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
              <span className="point m-3">1pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">

          <Col className="border-A">
            <p>
              11. Cocher l'image montrant un point de rassemblement
            </p>
            <div className="image-container">
              A <img src={Image1} alt="Point de rassemblement A" className="image-option images-panneaux-sortie_de_secours" />
              B <img src={Image2} alt="Point de rassemblement B" className="image-option images-panneaux-sortie_de_secours" />
              C <img src={Image3} alt="Point de rassemblement C" className="image-option images-panneaux-sortie_de_secours" />
            </div>
          </Col>

          <Col className="border-A text-center">
            <span className="point mt-3 d-block">1pts</span>
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
              <span className="point m-3">1pt</span>
            </div>
          </Col>
        </Row>
      </Container>


      <Container className="border-A mt-5">
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


      <Container className="border-A">
        <Row className="text-center border-A">
          <h3>QUESTIONNAIRE EVALUATION INDUCTION D'IMMERSION À LA SÉCURITÉ J2</h3>
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
          <div className="color">Note: /20</div>
          </Col>
          <Col>
            <div>Date:</div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <h6 className="color">
              Critère de la réussite : obtention d'une note minimun de 12/20
            </h6>
          </Col>

          <Col className="border-A text-center">
            <p>Réponses</p>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A alignement">
            <img src={ImageQuestion1} alt="Illustration de la situation de ligne de mire" className="image-question " />
            <p className="space">
              1. Cette image montre une situation de ligne de mire
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
              2. Situation de ligne mire peut oter la vie ?
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
              3. Le certificat médiacle peut etre acheter auprès d'un médecin
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
            <p>
              4. Seule une personne formée et habilitée peut intervenir sur une installation électrique ?
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question4" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question4" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">3pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              5. Le mode opératoire lors d'une consignation n'est pas obligatoire
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
              6. Les documents de consignation sont remplis dans le bureau avant d'aller sur le terrain
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
            <p>
              7. La ceinture de sécurité est obligatoire uniquement pour le chauffeur
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question7" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question7" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">1pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              8. Chaque conducteur doit pourvoir présenter son permis de conduire en toute circonstance
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
              <span className="point m-3">1pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              9. Chaque agent ayant un travail spécifique doit vérifier régulièrement la validité de son habilitation
            </p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center">
              <label>
                <input type="radio" name="question9" value="vrai" className="ios-radio" /> Vrai
              </label>
              <label className="ml-4">
                <input type="radio" name="question9" value="faux" className="ios-radio" /> Faux
              </label>
              <span className="point m-3">2pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              10. Je peux changer mon ampoule à partir d'une échelle
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
              <span className="point m-3">1pt</span>
            </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <p>
              11. On porte des EPI fluorescents POUR :
            </p>
            <p>a) Être plus visible dans des environnements à faible éclairage.</p>
            <p>b) Améliorer la sécurité sur les sites de travail.</p>
          </Col>

          <Col className="border-A">
            <div className="ios-radio-group text-center mt-5">
              <label>
                <input type="radio" name="question11" value="vrai" className="ios-radio" />a)
              </label>
              <label className="ml-4">
                <input type="radio" name="question11" value="faux" className="ios-radio" />b)
              </label>
              <span className="point m-3">2pt</span>
            </div>
          </Col>
        </Row>


        <Row className="border-A">
          <Col className="border-A">
            <p>
              12. Un espace confiné est un espace appauvri en oxygène, toxique ou explosive
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
        <Row className="border-A">
          <Col className="border-A">
            <p>
              13. Je peux utiliser un engin de manutention mécanique meme si je n'ai pas encore été déclaré apte par le service médiacl, à condition que j'ai été formé à l'engin spécifique.
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

        <Row className="border-A">
          <Col className="border-A">
            <p>
              14. Je peux guider ma charge avec la main
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
              <span className="point m-3">1pt</span>
            </div>
          </Col>
        </Row>
      </Container>


      <Container className="container-logo" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img
          src={comilogLogo}
          alt="Left Logo"
          style={{ height: '100px' }}
        />
        <img
          src={LogoEramet}
          alt="Right Logo"
          style={{ height: '100px' }}
        />
      </Container>



      <h3 className="text-center">QUESTIONNAIRE EVALUATION INDUCTION D'IMMERSION À LA SÉCURITÉ J1</h3>
      <Container className="border-A mt-4">
        <Row className="border-A">
          <Col>
            <div>Intitulé de la formation: Immersion sécurité</div>
            <div>Date de la formation: 30/04/2024</div>
          </Col>
          <Col>
            <div>Questionnaire renseigné le: 28/04/2024 </div>
          </Col>
          <Col>
            <div>Nom de l'Animateur: Falonne LEMBE </div>
          </Col>
          <Col>
            <div>Nom du participant: NTSOUNGHAT Darryn </div>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <h6>DEROULEMENT DE LA FORMATION</h6>
            <h6>NOTATION (de 1 à 4):</h6>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li>1. Pas du tout satisfait</li>
              <li>2. Peu satisfait</li>
              <li>3. Plutôt satisfait</li>
              <li>4. Très satisfait</li>
            </ul>
          </Col>
        <Col className="border-A text-center">
          <p>APPRECIATION QUALITATIVE</p>
        </Col>
          <Col className="border-A text-center">
            <p>COMMENTAIRES</p>
          </Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <h6>
              Objectif du cours:
            </h6>
            <p>Les objectifs du cours répondent à mes besoins professionnels</p>
          </Col>
          <Col className="border-A text-center">
  <p>APPRECIATION QUALITATIVE</p>
  <ul style={{ listStyleType: 'none', paddingLeft: 0, textAlign: 'left', display: 'inline-block' }}>
    <li>
      <input type="radio" id="option1" name="appreciation" value="1" />
      <label htmlFor="option1"> 1. Pas du tout satisfait</label>
    </li>
    <li>
      <input type="radio" id="option2" name="appreciation" value="2" />
      <label htmlFor="option2"> 2. Peu satisfait</label>
    </li>
    <li>
      <input type="radio" id="option3" name="appreciation" value="3" />
      <label htmlFor="option3"> 3. Plutôt satisfait</label>
    </li>
    <li>
      <input type="radio" id="option4" name="appreciation" value="4" />
      <label htmlFor="option4"> 4. Très satisfait</label>
    </li>
  </ul>
</Col>
<Col className="border-A text-center">
  <textarea 
    placeholder="Entrez un commentaire ici..." 
    rows="4" 
    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
  />
</Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <h6>
              Structure du cours:
            </h6>
            <p>Organisation du temps, rythme de formation, mise en pratique</p>
          </Col>
          <Col className="border-A text-center">
  <p>APPRECIATION QUALITATIVE</p>
  <ul style={{ listStyleType: 'none', paddingLeft: 0, textAlign: 'left', display: 'inline-block' }}>
    <li>
      <input type="radio" id="option1" name="appreciation" value="1" />
      <label htmlFor="option1"> 1. Pas du tout satisfait</label>
    </li>
    <li>
      <input type="radio" id="option2" name="appreciation" value="2" />
      <label htmlFor="option2"> 2. Peu satisfait</label>
    </li>
    <li>
      <input type="radio" id="option3" name="appreciation" value="3" />
      <label htmlFor="option3"> 3. Plutôt satisfait</label>
    </li>
    <li>
      <input type="radio" id="option4" name="appreciation" value="4" />
      <label htmlFor="option4"> 4. Très satisfait</label>
    </li>
  </ul>
</Col>
<Col className="border-A text-center">
  <textarea 
    placeholder="Entrez un commentaire ici..." 
    rows="4" 
    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
  />
</Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <h6>
              Qualité du formateur:
            </h6>
            <p>Connaissance ou techniques apportées, réponses aux questions, qualité de l'animation, l'écoute...</p>
          </Col>
          <Col className="border-A text-center">
  <p>APPRECIATION QUALITATIVE</p>
  <ul style={{ listStyleType: 'none', paddingLeft: 0, textAlign: 'left', display: 'inline-block' }}>
    <li>
      <input type="radio" id="option1" name="appreciation" value="1" />
      <label htmlFor="option1"> 1. Pas du tout satisfait</label>
    </li>
    <li>
      <input type="radio" id="option2" name="appreciation" value="2" />
      <label htmlFor="option2"> 2. Peu satisfait</label>
    </li>
    <li>
      <input type="radio" id="option3" name="appreciation" value="3" />
      <label htmlFor="option3"> 3. Plutôt satisfait</label>
    </li>
    <li>
      <input type="radio" id="option4" name="appreciation" value="4" />
      <label htmlFor="option4"> 4. Très satisfait</label>
    </li>
  </ul>
</Col>
<Col className="border-A text-center">
  <textarea 
    placeholder="Entrez un  commentaire ici..." 
    rows="4" 
    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
  />
</Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <h6>
              Supports de cours:
            </h6>
            <p>Bonne présentation, qualité du texte et des illustrations, facile à consulter...</p>
          </Col>
          <Col className="border-A text-center">
  <p>APPRECIATION QUALITATIVE</p>
  <ul style={{ listStyleType: 'none', paddingLeft: 0, textAlign: 'left', display: 'inline-block' }}>
    <li>
      <input type="radio" id="option1" name="appreciation" value="1" />
      <label htmlFor="option1"> 1. Pas du tout satisfait</label>
    </li>
    <li>
      <input type="radio" id="option2" name="appreciation" value="2" />
      <label htmlFor="option2"> 2. Peu satisfait</label>
    </li>
    <li>
      <input type="radio" id="option3" name="appreciation" value="3" />
      <label htmlFor="option3"> 3. Plutôt satisfait</label>
    </li>
    <li>
      <input type="radio" id="option4" name="appreciation" value="4" />
      <label htmlFor="option4"> 4. Très satisfait</label>
    </li>
  </ul>
</Col>
<Col className="border-A text-center">
  <textarea 
    placeholder="Entrez un commentaire ici..." 
    rows="4" 
    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
  />
</Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <h6>
              Logistique:
            </h6>
            <p>Accueil, salle, matériel utilisé, repas et pauses café.</p>
          </Col>
          <Col className="border-A text-center">
  <p>APPRECIATION QUALITATIVE</p>
  <ul style={{ listStyleType: 'none', paddingLeft: 0, textAlign: 'left', display: 'inline-block' }}>
    <li>
      <input type="radio" id="option1" name="appreciation" value="1" />
      <label htmlFor="option1"> 1. Pas du tout satisfait</label>
    </li>
    <li>
      <input type="radio" id="option2" name="appreciation" value="2" />
      <label htmlFor="option2"> 2. Peu satisfait</label>
    </li>
    <li>
      <input type="radio" id="option3" name="appreciation" value="3" />
      <label htmlFor="option3"> 3. Plutôt satisfait</label>
    </li>
    <li>
      <input type="radio" id="option4" name="appreciation" value="4" />
      <label htmlFor="option4"> 4. Très satisfait</label>
    </li>
  </ul>
</Col>
<Col className="border-A text-center">
  <textarea 
    placeholder="Entrez un commentaire ici..." 
    rows="4" 
    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
  />
</Col>
        </Row>

        <Row className="border-A">
          <Col className="border-A">
            <h6>
              Autres commentaires/Suggestions
            </h6>
          </Col>
          <Col className="border-A text-center">
  <p>Commentaires/Suggestions :</p>
  <textarea 
    placeholder="Entrez un commentaire ici..." 
    rows="4" 
    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
  />
</Col>
          <Col className="border-A text-center">
  <p>Commentaires/Suggestions :</p>
  <textarea 
    placeholder="Entrez un commentaire ici..." 
    rows="4" 
    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
  />
</Col>
        </Row>

        <div className="text-center mt-3">
      <p style={{ fontSize: '0.9em', marginTop: '10px' }}>
        * Reporter la note qui correspond à votre choix : Pas du tout satisfait - Peu satisfait - Plutôt satisfait - Très satisfait
      </p>
      <p style={{ fontSize: '0.9em' }}>
        Veuillez retourner cette fiche au Service Ressources Humaines (Section Formation) dans les meilleurs délais.
      </p>
      <p style={{ fontSize: '0.9em' }}>
        EN RH 05 Indice 02A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Révision : 07/10/2020
      </p>
      </div>

      </Container>

      






    </div >
  );
};

export default ExamPage;
