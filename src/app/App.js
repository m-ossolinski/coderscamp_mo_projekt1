import createLogo from '../components/swLogo/swLogo';
import generateQuestionForTheGameMode from '../services/game/generateQuestions';
import { createMainMenu } from '../components/mainMenu/mainMenu';

export const App = ({ options }) => {
  document.getElementById('swquiz-app').appendChild(createLogo()); //logo to be placed in final layout
  console.log(generateQuestionForTheGameMode('people'));
  document.getElementById('swquiz-app').appendChild(createMainMenu());
};