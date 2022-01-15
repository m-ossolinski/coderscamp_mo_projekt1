import { createQuizGameView } from '../../components/quizGameView/quizGameView';
import { changeGameModeText } from './changeGameModeText';

export const showGamePanel = async (gameMode) => {
  const mainView = document.querySelector('.main-view');
  const startGamePanel = document.querySelector('.main-game-panel');
  const spinner = document.querySelector('.sk-circle');

  if (startGamePanel) {
    startGamePanel.remove();
  }
  spinner.classList.remove('hide');

  const spinnerVisibilityTime = 1500;

  setTimeout(async () => {
    mainView.appendChild(await createQuizGameView(gameMode));
    changeGameModeText();
    spinner.classList.add('hide');
  }, spinnerVisibilityTime);
};
