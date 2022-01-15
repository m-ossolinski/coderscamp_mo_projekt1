import './modalWindowContent.css';
import { closeQuizGamePanel } from '../quizGameView/quizGameView';
import { createGamePanel } from '../mainView/mainView';
import { async } from 'regenerator-runtime';

const hideModalVisibility = () => {
  const modal = document.querySelector('.content');
  modal.classList.add('hidden');
};

const countCorrectAnswers = (answersList, player) => {
  const answers = [];
  answersList.forEach((answer) => {
    if (answer[player].isCorrect) {
      answers.push(answer[player].isCorrect);
    } else return;
  });
  return answers;
};

const setYodaQuoteString = (humanPlayer, autoPlayer) => {
  if (humanPlayer > autoPlayer) {
    return 'The force is strong in you young Padawan!';
  } else return 'Much to learn you still have...my young Padawan.';
};

const setFinishGameString = (
  quote,
  questionsNumber,
  humanAnswers,
  autoPlayerAnswers
) => {
  return `${quote} During 1 minute you have answered ${humanAnswers} / ${questionsNumber} questions. And Google guessed ${autoPlayerAnswers} / ${questionsNumber}.`;
};

const getFinishGameString = (answersList) => {
  const questionsNumber = answersList.length;

  const human = countCorrectAnswers(answersList, 'human').length;
  const autoPlayer = countCorrectAnswers(answersList, 'autoPlayer').length;

  const text = setFinishGameString(
    setYodaQuoteString(human, autoPlayer),
    questionsNumber,
    human,
    autoPlayer
  );
  return text;
};

const prepareEndGameText = () => {
  const title = document.createElement('h2');
  title.classList.add('content_title');
  title.innerText = 'GAME OVER';
  return title;
};

const prepareEndGameSummary = (answersList) => {
  const summary = document.createElement('p');
  summary.classList.add('content_summary');
  summary.innerText = getFinishGameString(answersList);
  return summary;
};

const createHeroImg = () => {
  const img = new Image();
  img.classList.add('middle-wrapper_img');
  img.src = '../../static/assets/ui/MasterYodaLeft.png';
  img.alt = 'MasterYoda';
  return img;
};

const createAnswersHeading = () => {
  const answersHeading = document.createElement('h3');
  answersHeading.classList.add('right-wrapper_title');
  answersHeading.innerText = 'Detailed answers:';
  return answersHeading;
};

const displayResultsTable = (answersList) => {
  const resultsTable = document.createElement('table');
  resultsTable.classList.add('resultsTable');
  const header = document.createElement('thead');
  header.classList.add('resultsTable_header');
  const headerRow = document.createElement('tr');
  headerRow.classList.add('resultsTable_header-row');

  const columnNames = ['', 'You', 'Computer', 'Answer'];
  columnNames.forEach((name) => {
    const th = document.createElement('th');
    th.innerText = `${name}`;
    headerRow.appendChild(th);
  });

  header.appendChild(headerRow);
  resultsTable.appendChild(headerRow);

  const resultsTableBody = document.createElement('tbody');
  resultsTableBody.classList.add('resultsTable_body');

  answersList.forEach((answer) => {
    const markup = `
        <tr>
          <td> <img src="${atob(answer.img)}" class="resultsTable_img"/> </td>
          <td class="resultsTable_answer--${
            answer.human.isCorrect ? 'correct' : 'incorrect'
          }"> ${answer.human.answer} </td>
          <td class="resultsTable_answer--${
            answer.autoPlayer.isCorrect ? 'correct' : 'incorrect'
          }"> ${answer.autoPlayer.answer} </td>
          <td class="resultsTable_answer--default"> ${
            answer.correctAnswer
          } </td>
        </tr>`;
    resultsTableBody.insertAdjacentHTML('beforeend', markup);
  });

  resultsTable.appendChild(resultsTableBody);
  return resultsTable;
};

const createNameInput = () => {
  const nameInput = document.createElement('input');
  nameInput.classList.add('form_name-input');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('placeholder', 'Type your name here');
  return nameInput;
};

const createNameLabel = () => {
  const nameLabel = document.createElement('label');
  nameLabel.classList.add('form_name-label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.innerText =
    'Please fill your name in order to receive eternal glory in whole Galaxy!';
  return nameLabel;
};

const createWarning = () => {
  const warning = document.createElement('span');
  warning.innerText = 'This field cannot be empty';
  warning.classList.add('form_warning');
  return warning;
};

const showWarning = () => {
  const warning = document.querySelector('.form_warning');
  warning.classList.add('form_warning--active');
};

const hideWarning = () => {
  const warning = document.querySelector('.form_warning');
  warning.classList.remove('form_warning--active');
};

const createSubmitButton = () => {
  const submitBtn = document.createElement('button');
  submitBtn.classList.add('form_submitBtn');
  submitBtn.setAttribute('type', 'submit');
  const submitTxt = 'may the force be with you';
  submitBtn.innerText = submitTxt.toUpperCase();
  return submitBtn;
};

const handleSaveUserResult = (e, saveScore, answersList, gameMode) => {
  e.preventDefault();
  const input = document.querySelector('.form_name-input');
  const playerName = input.value;
  if (playerName === '') {
    showWarning();
  } else {
    const score = countCorrectAnswers(answersList, 'human').length;
    saveScore(playerName, score, gameMode, answersList);
    input.value = '';
    setTimeout(() => {
      hideModalVisibility();
      const backdrop = document.getElementById('backdrop');
      const modalWrapper = document.getElementById('modal');
      setTimeout(() => {
        backdrop.remove();
        modalWrapper.remove();
      }, 500);
    }, 1000);
  }
};

export const gameResultsModal = (saveScore, gameMode) => {
  const game = localStorage.getItem('Game');
  const answersList = JSON.parse(game);

  const content = document.createElement('div');
  content.classList.add('content');

  const title = prepareEndGameText();

  const summary = prepareEndGameSummary(answersList);

  const middleContainer = document.createElement('div');
  middleContainer.classList.add('middle_wrapper');

  const img = createHeroImg();
  middleContainer.appendChild(img);

  const rightContainer = document.createElement('div');
  rightContainer.classList.add('right_wrapper');

  const answersHeading = createAnswersHeading();
  rightContainer.appendChild(answersHeading);

  const resultsTable = displayResultsTable(answersList);
  rightContainer.appendChild(resultsTable);

  middleContainer.appendChild(rightContainer);

  const form = document.createElement('form');
  form.classList.add('content_form');

  const nameInput = createNameInput();
  nameInput.addEventListener('focus', () => hideWarning());

  const nameLabel = createNameLabel();
  const warning = createWarning();

  const submitBtn = createSubmitButton();
  submitBtn.addEventListener('click', async (e) => {
    handleSaveUserResult(e, saveScore, answersList, gameMode);
    closeQuizGamePanel();
    const mainView = document.querySelector('.main-view');
    mainView.appendChild(await createGamePanel());
  });

  form.appendChild(warning);
  form.appendChild(nameInput);
  form.appendChild(nameLabel);
  form.appendChild(submitBtn);

  content.appendChild(title);
  content.appendChild(summary);
  content.appendChild(middleContainer);
  content.appendChild(form);

  return content;
};
