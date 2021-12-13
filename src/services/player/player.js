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

    getQuestion(callback, gameMode) {
        const isCallback = typeof callback == 'function';
        if(!isCallback) throw new Error('Argument callback have to be a function');

        const {answers, rightAnswer: correctAnswers, image} = callback(gameMode);

        this.question.push(gameMode);
        this.answers.push({answers, image});
        this.correctAnswers.push(correctAnswers);
    }
}