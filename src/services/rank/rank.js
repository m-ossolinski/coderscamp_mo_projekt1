export default class Rank {
    constructor() {
        this.rank = localStorage.getItem('rank');
        if (!this.rank) {
            this.rank = {
                people: [],
                vehicles: [],
                spaceships: [],
            }
        } else {
            this.rank = JSON.parse(this.rank);
        }
    }

    addToRank(currentMode, player) {
        const index = this.rank[currentMode].indexOf((item) => item.id === player.id);
        if (index === -1) {
            this.rank[currentMode].push(player)
        } else {
            this.rank[currentMode][index] = player;
        }

        this.rank[currentMode] = this.rank[currentMode].sort((a, b) => a.points - b.points);
        localStorage.setItem('rank', JSON.stringify(this.rank));
    }

    getRank() {
        return this.rank;
    }

}