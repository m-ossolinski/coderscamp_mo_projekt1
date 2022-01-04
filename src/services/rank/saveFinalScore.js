import { Rank } from './rank';

export const saveFinalScore = (playerName, score, gameMode) => {
  const player = {
    playerName: playerName,
    score: score
  };

  const playerRank = new Rank();
  playerRank.addToRank(gameMode, player);
};
