import createLogo from '../components/swLogo/swLogo';
import generateQuestionForTheGameMode from '../services/game/generateQuestions';
import { createMainMenu, setGameMode } from '../components/mainMenu/mainMenu';
import createImgElementPeopleMode from '../components/recognitionImg/ImgModePeople/ImgModePeople';
import {
  gameMode,
  PEOPLE_MODE_QUESTION
} from '../components/gameMode/gameMode';
import { createGameRulesComponent } from '../components/gameRules/gameRules';

export const App = async ({ options }) => {
  const swquiz = document.getElementById('swquiz-app');
  const question = await generateQuestionForTheGameMode('people');

  swquiz.appendChild(createLogo());
  swquiz.appendChild(createMainMenu(setGameMode));
  swquiz.appendChild(gameMode(PEOPLE_MODE_QUESTION));

  swquiz.appendChild(createImgElementPeopleMode(question.image));
  swquiz.appendChild(createGameRulesComponent('people', question.rightAnswer));
};
