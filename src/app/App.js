import mainMenu from '../components/mainMenu';
import generateQuestionForTheGameMode from '../services/game/generateQuestions';

export const App = ({ options }) => {
  console.log(generateQuestionForTheGameMode('people'));
};
