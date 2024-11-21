/**
 * Utils - Classe contenente metodi utili per la manipolazione del DOM.
 *
 * La classe Utils fornisce metodi statici per semplificare la creazione e la gestione degli elementi del DOM.
 * È utile per evitare la ripetizione di codice e rendere il codice più leggibile e manutenibile.
 * Non sei obbligato a usare la classe Utils per creare elementi del DOM, ma visto che c'è potrebbe essere utile.
 * Sotto ne vedi un esempio di utilizzo. Se passi il mouse sopra Utils.createElement, vedi la sua definizione.
 *
 */
import { Utils } from "../shared/Utils.js";

export class Game {
  constructor(data) {
    this.data = data;
    console.log("Game initialized with data:", this.data);
  }

  startGame() {
    const level = 1;
    const mainContainer = document.getElementById("maincontainer");
    const sideContainer = document.getElementById("sideContainer");


    const gameSection = Utils.createElement({
      tagName: "div",
      id: "gameSection",
    });

    const questions = this.data.questions.find(q => q.level === level);

    console.log(questions);

    gameSection.innerHTML = `
    <div id="questionSection">
    <h2 id="questionText">${questions.gameQuestions[0].question}</h2>
    </div>
    <div id="answerSection">
      ${questions.gameQuestions[0].options[0].map(option => `
      <button class="answerButton">${option}</button>
      `).join("")}
    </div>
    `




    mainContainer.appendChild(gameSection);
  }
}
