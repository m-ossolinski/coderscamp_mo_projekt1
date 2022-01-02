import { createMainView } from '../components/mainView/mainView';
import { spinner } from '../components/spinner/spinner';
import { createQuizGameView } from '../components/quizGameView/quizGameView';

export const App = async ({ options }) => {
  const swquiz = document.getElementById('swquiz-app');

  swquiz.appendChild(spinner());
  swquiz.appendChild(await createMainView());
  swquiz.appendChild(await createQuizGameView());
};
