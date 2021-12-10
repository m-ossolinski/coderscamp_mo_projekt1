export default class Player {
    constructor(playerName, points) {
        this.playerName = playerName;
        this.points = points;
        this.id = Date.now();
    }

    save() {
        localStorage.setItem('playerName', this.playerName);
        localStorage.setItem('points', this.points);
    }

}