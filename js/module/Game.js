import { FetchData } from '../shared/FetchData.js';

export class Game {
    prizes = [];
    questions = [];
    fetchData = new FetchData();

    constructor() { }

    async #init() {
        try {
            this.prizes = await this.fetchData.getPrizes();
            this.questions = await this.fetchData.getQuestions();
        } catch (error) {
            console.error('Error initializing the game:', error);
        }
    }

    async startGame() {
        try {
            await this.#init();
            this.showPrizes();
            this.showQuestions();

        } catch (error) {
            console.error('Error starting the game:', error);
        }
    }

    showPrizes() {
        console.log(this.prizes);
    }

    showQuestions() {
        console.log(this.questions);
    }
}
