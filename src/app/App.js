import createLogo from '../components/swLogo/swLogo';
import generateQuestionForTheGameMode from '../services/game/generateQuestions';
import { createMainMenu } from '../components/mainMenu/mainMenu';
import createImgElementPeopleMode from '../components/recognitionImg/ImgModePeople/ImgModePeople';

export const App = async ({ options }) => {
  const swquiz = document.getElementById('swquiz-app');

  swquiz.appendChild(createLogo());
  swquiz.appendChild(createMainMenu());

  const question = await generateQuestionForTheGameMode('people');
  const img = createImgElementPeopleMode(atob(question.image));

  swquiz.appendChild(img);
};
