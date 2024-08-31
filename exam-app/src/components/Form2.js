import React from 'react';
import './ExamPage.css';
import ImageQuestion1 from '../assets/image_question_1.jpg';





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
    <div>Note: /20</div>
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