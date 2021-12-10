import Player from "../services/player/player";
import Rank from "../services/rank/rank";


export const App = ({ options }) => {

    let player = new Player("Gracz10", 10);
    player.save();

    const currentMode = 'vehicles';

    const rank = new Rank();

    rank.addToRank(currentMode, player);

    // rank.getRank()[currentMode].map((rankItem, idx) => {
    //     console.log('miejsce', idx + 1, 'nazwa', rankItem.nickName)
    // })



}