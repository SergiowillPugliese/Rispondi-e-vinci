export class ScoreManager {
    constructor(prizes) {
        this.prizes = prizes;
        this.currentPrize = this.prizes[0].amount;
        this.lastCheckpoint = 0;
        this.pendingPrize = 0;
    }

    getCurrentPrize() {
        return this.currentPrize;
    }

    getPendingPrize() {
        return this.pendingPrize;
    }

    getLastCheckpointPrize() {
        return this.lastCheckpoint;
    }

    updateScore(level) {
        const currentPrize = this.prizes.find(p => p.level === level);
        if (currentPrize) {
            this.currentPrize = currentPrize.amount;

            if (currentPrize.checkpoint) {
                this.pendingPrize = currentPrize.amount;
            }
        }
    }

    confirmCheckpoint(continueGame = false) {
        if (this.pendingPrize > 0) {
            this.lastCheckpoint = this.pendingPrize;
            this.currentPrize = this.pendingPrize;

            if (continueGame) {
                const nextPrize = this.prizes.find(p => p.level === this.currentLevel + 1);
                if (nextPrize) {
                    this.currentPrize = nextPrize.amount;
                }
            }

            this.pendingPrize = 0;
        }
    }

    isCheckpoint(level) {
        const prize = this.prizes.find(p => p.level === level);
        return prize && prize.checkpoint;
    }
}