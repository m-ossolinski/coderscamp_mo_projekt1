import { toggleButtonText } from './toggleButtonText';

export default function toggleGameRulesVisibility() {
  const modeRulesContainer = document.querySelector('.mode-rules-container');
  modeRulesContainer.classList.toggle('cover');
  toggleButtonText(modeRulesContainer.classList);

}
