import { saveToRank } from './rank';

export const saveFinalScore = (playerName, score, gameMode, answersList) => {
  const player = {
    playerName: playerName,
    score: score,
    questions: answersList.length
  };

  console.log(`saveFinalScore: ${gameMode}`);

  saveToRank(gameMode, player);
};
