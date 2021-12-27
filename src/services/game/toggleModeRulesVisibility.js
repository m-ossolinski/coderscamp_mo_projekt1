import changeButtonText from './changeButtonText';

export default function toggleGameRulesVisibility() {
  const modeRulesContainer = document.querySelector('.mode-rules-container');
  modeRulesContainer.classList.toggle('cover');

  changeButtonText(modeRulesContainer.classList);
}