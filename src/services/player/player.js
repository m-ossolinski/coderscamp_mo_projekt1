export default class Player {
    constructor(playerName, points) {
        this.playerName = playerName;
        this.points = points;
        this.id = Date.now();
        this.questions = 0;
        this.answers = 0;
        this.correctAnswers = 0;
    }

    save() {
        localStorage.setItem('playerName', this.playerName);
        localStorage.setItem('points', this.points);
    }

    askQuestion(callback) {
        const isCallback = typeof callback == 'function';
        if(!isCallback) throw new Error('Argument callback have to be a function');

        callback();
    }

    giveAnswer(callback) {
        const isCallback = typeof callback == 'function';
        if(!isCallback) throw new Error('Argument callback have to be a function');

        callback();
    }

}