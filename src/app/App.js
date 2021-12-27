import generateQuestionForTheGameMode from '../services/game/generateQuestions';
import { getAutoPlayer } from '../services/player/autoPlayer';
import createMainView from '../components/mainView/mainView';
import createLogo from '../components/swLogo/swLogo';
import { createMainMenu } from '../components/mainMenu/mainMenu';
import createImgElementPeopleMode from '../components/recognitionImg/ImgModePeople/ImgModePeople';
import {
  gameMode,
  PEOPLE_MODE_QUESTION
} from '../components/gameMode/gameMode';
import { createGameRulesComponent } from '../components/gameRules/gameRules';
// import Game from '../services/game/game';

export const App = async ({ options }) => {
  const swquiz = document.getElementById('swquiz-app');
  const question = await generateQuestionForTheGameMode('people');


  // swquiz.appendChild(createImgElementPeopleMode(question.image));
  const gameRules = {gameMode: 'people', answer: question.rightAnswer};

  swquiz.appendChild(createMainView(question.image, gameRules));

  // swquiz.appendChild(createLogo());
  // swquiz.appendChild(createMainMenu());
  // swquiz.appendChild(gameMode(PEOPLE_MODE_QUESTION));

  // swquiz.appendChild(createGameRulesComponent('people', question.rightAnswer));

  // const game = new Game();
  // game.init();
};
