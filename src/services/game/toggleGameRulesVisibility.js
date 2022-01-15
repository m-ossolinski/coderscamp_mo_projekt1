import { toggleButtonText } from './toggleButtonText';

export const toggleGameRulesVisibility = () => {
  const modeRulesContainer = document.querySelector('.mode-rules-container');
  modeRulesContainer.classList.toggle('cover');
  const rankContainer = document.querySelector('.ranking-container');
  rankContainer.classList.toggle('uncover');
  toggleButtonText(modeRulesContainer.classList);
};
