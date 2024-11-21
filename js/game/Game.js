import { QuestionManager } from './QuestionManager.js';
import { ScoreManager } from './ScoreManager.js';
import { GameUI } from './GameUI.js';
import { GameState } from './GameState.js';

export class Game {
  constructor(data) {
    this.questionManager = new QuestionManager(data.questions);
    this.scoreManager = new ScoreManager(data.prizes);
    this.gameUI = new GameUI();
    this.gameState = new GameState(data.prizes);

    this.currentLevel = 1;
    this.data = data;
  }

  startGame() {
    this.initializeGame();
    this.setupEventListeners();
  }

  initializeGame() {
    try {
      const currentQuestion = this.questionManager.getQuestionForLevel(this.currentLevel);
      if (!currentQuestion) {
        throw new Error('Nessuna domanda disponibile per il livello corrente');
      }

      this.gameUI.displayQuestion(currentQuestion);
      this.gameUI.updateScore(this.scoreManager.getCurrentPrize());
    } catch (error) {
      console.error('Errore durante l\'inizializzazione del gioco:', error);
      this.handleGameError();
    }
  }

  setupEventListeners() {
    this.gameUI.onAnswerSelected((selectedAnswer) => {
      if (this.gameState.isPlaying()) {
        this.handleAnswer(selectedAnswer);
      }
    });
  }

  handleAnswer(selectedAnswer) {
    const isCorrect = this.questionManager.checkAnswer(selectedAnswer);

    if (isCorrect) {
      this.handleCorrectAnswer();
    } else {
      this.handleWrongAnswer();
    }
  }

  handleCorrectAnswer() {
    // Controlla se il livello attuale è un checkpoint
    if (this.gameState.isCheckpoint(this.currentLevel)) {
      this.handleCheckpoint();
      return;
    }

    // Incrementa il livello
    this.currentLevel++;

    // Aggiorna il punteggio per il nuovo livello
    this.scoreManager.updateScore(this.currentLevel);
    this.gameUI.updateScore(this.scoreManager.getCurrentPrize());

    // Controlla se il giocatore ha vinto
    if (this.currentLevel > this.gameState.maxLevel) {
      this.handleGameWon();
      return;
    }

    this.nextQuestion();
  }

  handleWrongAnswer() {
    this.gameState.gameOver();
    const finalPrize = this.currentLevel === 1 ? 0 : this.scoreManager.getLastCheckpointPrize();
    this.gameUI.showGameOver(finalPrize);
  }

  handleGameWon() {
    this.gameState.gameWon();
    const totalPrize = this.scoreManager.getCurrentPrize();
    this.gameUI.showVictory(totalPrize);
  }

  nextQuestion() {
    try {
      const nextQuestion = this.questionManager.getQuestionForLevel(this.currentLevel);
      if (!nextQuestion) {
        throw new Error('Nessuna domanda disponibile per il livello successivo');
      }

      this.gameUI.displayQuestion(nextQuestion);
      this.gameUI.updateScore(this.scoreManager.getCurrentPrize());
    } catch (error) {
      console.error('Errore durante il caricamento della prossima domanda:', error);
      this.handleGameError();
    }
  }

  handleCheckpoint() {
    this.gameState.setCheckpoint();
    const pendingPrize = this.scoreManager.getPendingPrize();

    this.gameUI.showCheckpointDialog(
      // Callback per continuare
      () => {
        this.gameState.continueGame();
        this.currentLevel++;
        this.scoreManager.confirmCheckpoint(true);
        this.gameUI.updateScore(this.scoreManager.getCurrentPrize());
        this.nextQuestion();
      },
      // Callback per fermarsi
      () => {
        this.gameState.gameWon();
        this.scoreManager.confirmCheckpoint(false);
        this.gameUI.showVictory(pendingPrize);
      }
    );
  }

  handleGameError() {
    this.gameState.gameOver();
    this.gameUI.showGameOver(this.scoreManager.getLastCheckpointPrize());
  }
}