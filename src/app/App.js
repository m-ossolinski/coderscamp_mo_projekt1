import { createMainView } from '../components/mainView/mainView';

export const App = async ({ options }) => {
  const swquiz = document.getElementById('swquiz-app');

  swquiz.appendChild(await createMainView());
};
