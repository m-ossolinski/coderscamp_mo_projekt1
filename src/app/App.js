import { createMainView } from '../components/mainView/mainView';
<<<<<<< HEAD
import { spinner } from '../components/spinner/spinner';
=======
import { createQuizGameView } from '../components/quizGameView/quizGameView';
>>>>>>> SWQ-35-quiz-game-mode

export const App = async ({ options }) => {
  const swquiz = document.getElementById('swquiz-app');

  swquiz.appendChild(spinner());
  swquiz.appendChild(await createMainView());
  swquiz.appendChild(await createQuizGameView());
};
