import generateQuestionForTheGameMode from '../services/game/generateQuestions';
import { mainMenu } from '../components/mainMenu/mainMenu';

export const App = ({ options }) => {
  console.log(generateQuestionForTheGameMode('people'));
  document.getElementById('swquiz-app').appendChild(mainMenu());
};
