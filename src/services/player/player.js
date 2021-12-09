export default class Player {
    constructor(nickName, points) {
        this.nickName = nickName;
        this.points = points;
        this.id = Date.now();
    }

    save() {
        localStorage.setItem('nickName', this.nickName);
        localStorage.setItem('points', this.points);
    }

}