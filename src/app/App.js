import createLogo from '../components/swLogo/swLogo';
import generateQuestionForTheGameMode from '../services/game/generateQuestions';
import { createMainMenu } from '../components/mainMenu/mainMenu';
import getAutoPlayer from '../services/player/autoPlayer';

export const App = ({ options }) => {
  document.getElementById('swquiz-app').appendChild(createLogo()); //logo to be placed in final layout
  console.log(generateQuestionForTheGameMode('people'));
  document.getElementById('swquiz-app').appendChild(createMainMenu());
  console.log(getAutoPlayer().getAnswer('some image', ['a', 'b', 'c', 'd']));
};