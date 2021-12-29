import { createMainView } from '../components/mainView/mainView';
import { createQuizGameView } from '../components/quizGameView/quizGameView';
import Game from '../services/game/game'
import { GAME_MODES } from '../consts/GAME_MODES';
import generateQuestionForTheGameMode from '../services/game/generateQuestions';
import { getAutoPlayer } from '../services/player/autoPlayer';
import createLogo from '../components/swLogo/swLogo';
import { createMainMenu } from '../components/mainMenu/mainMenu';
import createImgElementPeopleMode from '../components/recognitionImg/ImgModePeople/ImgModePeople';
import {
  gameMode,
  PEOPLE_MODE_QUESTION
} from '../components/gameMode/gameMode';
import { createGameRulesComponent } from '../components/gameRules/gameRules';

export const App = async ({ options }) => {
  const swquiz = document.getElementById('swquiz-app');
  const question = await generateQuestionForTheGameMode(GAME_MODES.people);
  const gameRules = {gameMode: 'people', answer: question.rightAnswer};
  console.log(GAME_MODES.people);

  swquiz.appendChild(createMainView(question.image, gameRules));
  swquiz.appendChild(createQuizGameView(question, GAME_MODES.people));
};
