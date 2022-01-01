import { createMainView } from '../components/mainView/mainView';
import { createQuizGameView } from '../components/quizGameView/quizGameView';

export const App = async ({ options }) => {
  const swquiz = document.getElementById('swquiz-app');

  swquiz.appendChild(await createMainView());
  swquiz.appendChild(await createQuizGameView());
};
