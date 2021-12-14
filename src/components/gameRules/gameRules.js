import GAME_MODES from '../../consts/GAME_MODES';
import './gameRules.css';

const createTextContent = (gameMode, question) => {
  return `You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select ${
    gameMode === GAME_MODES.people ? 'who' : 'what'
  } from Star Wars is showed on the left (${
    question.rightAnswer
  } right now) from available options`;
};

const createGameRulesElement = (gameMode, question) => {
  const containerEl = document.createElement('div');
  containerEl.classList.add('mode-rules_wrapper');

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

  const content = createTextContent(gameMode, question);
  rulesEl.innerText = content;

  containerEl.appendChild(titleEl);
  containerEl.appendChild(rulesEl);

  return containerEl;
};

export default createGameRulesElement;
