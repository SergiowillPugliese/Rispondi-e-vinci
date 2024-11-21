export class GameState {
    constructor(prizes) {
        this.state = 'playing';  // playing, checkpoint, gameOver, won
        this.currentLevel = 1;
        this.maxLevel = this.calculateMaxLevel(prizes);
        this.checkpoints = this.findCheckpoints(prizes);
    }

    calculateMaxLevel(prizes) {
        return Math.max(...prizes.map(prize => prize.level));
    }

    findCheckpoints(prizes) {
        return prizes
            .filter(prize => prize.checkpoint)
            .map(prize => prize.level);
    }

    isCheckpoint(level) {
        return this.checkpoints.includes(level);
    }

    gameOver() {
        this.state = 'gameOver';
    }

    gameWon() {
        this.state = 'won';
    }

    setCheckpoint() {
        this.state = 'checkpoint';
    }

    continueGame() {
        this.state = 'playing';
    }

    isGameOver() {
        return this.state === 'gameOver';
    }

    isGameWon() {
        return this.state === 'won';
    }

    isAtCheckpoint() {
        return this.state === 'checkpoint';
    }

    isPlaying() {
        return this.state === 'playing';
    }
}