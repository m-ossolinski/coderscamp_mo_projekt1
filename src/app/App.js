import { createMainView } from '../components/mainView/mainView';
import { spinner } from '../components/spinner/spinner';
import { setRank } from '../services/rank/rank';

export const App = async ({ options }) => {
  localStorage.clear('Game');
  const swquiz = document.getElementById('swquiz-app');

  swquiz.appendChild(spinner());
  swquiz.appendChild(await createMainView());
};
