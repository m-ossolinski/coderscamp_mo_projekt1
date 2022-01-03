import { createQuizGameView } from '../../components/quizGameView/quizGameView';

export const showGamePanel = async () => {
  const mainView = document.querySelector('.main-view');
  const startGamePanel = document.querySelector('.main-game-panel');
  const spinner = document.querySelector('.sk-circle');

  startGamePanel.remove();
  spinner.classList.remove('hide');

  const spinnerVisibilityTime = 1.5;

  setTimeout(async () => {
    mainView.appendChild(await createQuizGameView());
    spinner.classList.add('hide');
  }, spinnerVisibilityTime);
};
