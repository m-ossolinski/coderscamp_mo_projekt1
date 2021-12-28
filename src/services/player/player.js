import generateQuestionForTheGameMode from '../game/generateQuestions';

export default class Player {
    constructor(playerName, points) {
        this.playerName = playerName;
        this.points = points;
        this.id = Date.now();
        this.question = [];
        this.answers = [];
        this.correctAnswers = [];
    }

    save() {
        localStorage.setItem('playerName', this.playerName);
        localStorage.setItem('points', this.points);
    }

    getQuestion(gameMode) {
        const {answers, rightAnswer: correctAnswers, image} = generateQuestionForTheGameMode(gameMode);

        this.question.push(gameMode);
        this.answers.push({answers, image});
        this.correctAnswers.push(correctAnswers);
    }
}