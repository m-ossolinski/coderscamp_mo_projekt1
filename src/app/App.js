import generateQuestionForTheGameMode from '../services/game/generateQuestions';
import { createMainMenu } from '../components/mainMenu/mainMenu';
import createImgElementPeopleMode from '../components/recognitionImg/ImgModePeople/ImgModePeople';
import createGameRulesElement from '../components/gameRules/gameRules';

export const App = async ({ options }) => {
  const swquiz = document.getElementById('swquiz-app');
  const question = await generateQuestionForTheGameMode('people');

  swquiz.appendChild(createLogo());
  swquiz.appendChild(createMainMenu());

  const question = await generateQuestionForTheGameMode('people');

  const img = createImgElementPeopleMode(question.image);

  swquiz.appendChild(img);
  swquiz.appendChild(createImgElementPeopleMode(question.image));
  swquiz.appendChild(createGameRulesElement('people', question.rightAnswer));
};
