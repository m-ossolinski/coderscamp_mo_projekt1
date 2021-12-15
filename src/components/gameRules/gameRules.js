import { GAME_MODES } from '../../consts/GAME_MODES';
import './gameRules.css';

const gameDescriptionText = (gameMode, answer) => {
  return `You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select ${
    gameMode === GAME_MODES.people ? 'who' : 'what'
  } from Star Wars is showed on the left (${answer} right now) from available options`;
};

export const createGameRulesComponent = (gameMode, answer) => {
  const rulesComponent = document.createElement('div');
  rulesComponent.classList.add('mode-rules');

  const titleEl = document.createElement('div');
  titleEl.classList.add('mode-rules_title');

  const icon = new Image();
  icon.src = '../../static/assets/ui/icons/school_24px.png';
  icon.classList.add('mode-rules_icon');
  titleEl.appendChild(icon);

  const spanTitleEl = document.createElement('span');
  const titleText = 'Mode rules';
  spanTitleEl.innerText = titleText;
  titleEl.appendChild(spanTitleEl);

  const rulesEl = document.createElement('div');
  rulesEl.classList.add('mode-rules_content');

  const content = gameDescriptionText(gameMode, answer);
  rulesEl.innerText = content;

  rulesComponent.appendChild(titleEl);
  rulesComponent.appendChild(rulesEl);

  return rulesComponent;
};
