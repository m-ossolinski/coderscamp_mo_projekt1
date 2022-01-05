import { createMainView } from '../components/mainView/mainView';
import { spinner } from '../components/spinner/spinner';
import { setRank } from '../services/rank/rank';

export const App = async ({ options }) => {
  const swquiz = document.getElementById('swquiz-app');

  swquiz.appendChild(spinner());
  swquiz.appendChild(await createMainView());
  localStorage.clear('Game');
  setRank();
};
