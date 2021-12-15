import createLogo from '../components/swLogo/swLogo';
import generateQuestionForTheGameMode from '../services/game/generateQuestions';
import { createMainMenu } from '../components/mainMenu/mainMenu';
import createImgElementPeopleMode from '../components/recognitionImg/ImgModePeople/ImgModePeople';
import {
  gameMode,
  PEOPLE_MODE_QUESTION
} from '../components/gameMode/gameMode';
import { getAutoPlayer } from '../services/player/autoPlayer';

export const App = async ({ options }) => {
  const swquiz = document.getElementById('swquiz-app');

  swquiz.appendChild(createLogo());
  swquiz.appendChild(createMainMenu());
  swquiz.appendChild(gameMode(PEOPLE_MODE_QUESTION));

  const question = await generateQuestionForTheGameMode('people');

  const img = createImgElementPeopleMode(question.image);

  swquiz.appendChild(img);

  console.log(getAutoPlayer().getAnswer(question.image, question.answers));
};
