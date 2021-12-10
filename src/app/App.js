import generateQuestionForTheGameMode from '../services/game/generateQuestions';
import { mainMenu } from '../components/mainMenu';

export const App = ({ options }) => {
  console.log(generateQuestionForTheGameMode('people'));
};
