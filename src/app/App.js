import generateQuestionsForTheGameMode from '../services/game/generateQuestions';

export const App = ({ options }) => {
  console.log(generateQuestionsForTheGameMode('starships'));
};
