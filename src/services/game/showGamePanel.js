import { createQuizGameView } from '../../components/quizGameView/quizGameView';

export const showGamePanel = async () => {
  const mainView = document.querySelector('.main-view');
  const startGamePanel = document.querySelector('.main-game-panel');
  const spinner = document.querySelector('.sk-circle');

  startGamePanel.remove();
  spinner.classList.remove('hide');

  const ONE_SECOND_MILLIS = 1000;
  const SPINNER_VISIBILITY_TIME = ONE_SECOND_MILLIS * 3;

  setTimeout(async () => {
    mainView.appendChild(await createQuizGameView());
    spinner.classList.add('hide');
  }, SPINNER_VISIBILITY_TIME);
};
