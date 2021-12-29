import { createGamePanel } from '../../components/mainView/mainView';

export const selectGameMode = async (item) => {
  const mode = item.dataset.id;

  const previousGame = document.querySelector('.main');
  previousGame.remove();

  const spinner = document.querySelector('.sk-circle');
  spinner.classList.remove('hide');

  const gamePanelContainer = document.querySelector('.main-view');

  const gamePanel = await createGamePanel(mode);

  spinner.classList.add('hide');

  gamePanelContainer.appendChild(gamePanel);
};
