import { Utils } from '../shared/Utils.js';
import { checkpointSizeParagraphStyle } from '../shared/style.js';

export class GameUI {
    constructor() {
        this.app = document.getElementById('app');
        this.mainContainer = null;
        this.sideContainer = null;
        this.gameSection = null;
        this.answerCallback = null;

        setTimeout(() => {
            this.mainContainer = document.querySelector('#maincontainer');
            this.sideContainer = document.querySelector('#sidecontainer');
        }, 100);
    }

    displayQuestion(question) {
        if (!this.mainContainer) {
            this.mainContainer = document.querySelector('#maincontainer');
        }

        if (!this.gameSection) {
            this.gameSection = Utils.createElement({
                tagName: 'div',
                id: 'gameSection'
            });
        }

        this.gameSection.innerHTML = `
            <div id="questionSection">
                <h2 id="questionText">${question.question}</h2>
            </div>
            <div id="answerSection">
                ${question.options.map(option => `
                    <button class="answerButton" data-key="${option.key}">
                        ${option.key}: ${option.value}
                    </button>
                `).join('')}
            </div>
        `;

        if (!this.gameSection.parentNode) {
            this.mainContainer.appendChild(this.gameSection);
        }

        this.setupAnswerButtons();
    }

    setupAnswerButtons() {
        const buttons = this.gameSection.querySelectorAll('.answerButton');
        buttons.forEach(button => {
            button.addEventListener('click', async () => {
                if (this.answerCallback) {
                    // Disabilita tutti i pulsanti
                    buttons.forEach(btn => btn.disabled = true);

                    // Evidenzia la risposta selezionata
                    button.classList.add('selected-answer');

                    // Aspetta 3 secondi prima di chiamare il callback
                    await new Promise(resolve => setTimeout(resolve, 3000));

                    // Rimuovi l'evidenziazione
                    button.classList.remove('selected-answer');

                    // Chiama il callback con la risposta
                    this.answerCallback(button.dataset.key);
                }
            });
        });
    }

    onAnswerSelected(callback) {
        this.answerCallback = callback;
    }

    updateScore(prize) {
        if (!this.sideContainer) {
            this.sideContainer = document.querySelector('#sidecontainer');
        }
        if (!this.sideContainer) return;

        const prizeElements = this.sideContainer.querySelectorAll('.prizes');
        prizeElements.forEach(el => {
            const prizeValue = el.querySelector('.prizesValue');
            if (prizeValue) {
                const amount = parseInt(prizeValue.textContent);
                if (amount === prize) {
                    el.classList.add('current-prize');
                } else {
                    el.classList.remove('current-prize');
                }
            }
        });
    }

    showCheckpointDialog(continueCallback, stopCallback) {
        const dialog = Utils.createElement({
            tagName: 'div',
            className: 'dialog-overlay',
            content: `
        <div class="dialog">
          <h2>Hai raggiunto un checkpoint!</h2>
          <p>Vuoi continuare a giocare o fermarti qui?</p>
          <div class="dialog-buttons">
            <button id="continueButton">Continua</button>
            <button id="stopButton">Fermati</button>
          </div>
        </div>
      `
        });

        document.body.appendChild(dialog);

        document.getElementById('continueButton').onclick = () => {
            dialog.remove();
            continueCallback();
        };

        document.getElementById('stopButton').onclick = () => {
            dialog.remove();
            stopCallback();
        };
    }

    showGameOver(finalPrize) {
        this.showEndGameMessage('Game Over!', finalPrize);
    }

    showVictory(totalPrize) {
        this.showEndGameMessage('Congratulazioni, hai vinto!', totalPrize);
    }

    showEndGameMessage(message, prize) {
        const endGameOverlay = Utils.createElement({
            tagName: 'div',
            className: 'end-game-overlay',
            content: `
        <div class="end-game-message">
          <h2>${message}</h2>
          <p>Hai vinto: €${prize}</p>
          <button onclick="location.reload()">Gioca ancora</button>
        </div>
      `
        });

        document.body.appendChild(endGameOverlay);
    }
}