import { createGamePanel } from '../../components/mainView/mainView';

export const selectGameMode = async (item) => {
  const mode = item.dataset.id;

  const previousGame = document.querySelector('.main');
  previousGame.remove();

  const gamePanelContainer = document.querySelector('.main-view');

  const gamePanel = await createGamePanel(mode);

  gamePanelContainer.appendChild(gamePanel);
};
