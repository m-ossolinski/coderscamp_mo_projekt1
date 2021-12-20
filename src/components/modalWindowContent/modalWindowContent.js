import './modalWindowContent.css';

/* EXAMPLE DATA 

const answersList = [
  {
    id: 1,
    img: '../../../static/assets/img/modes/people/13.jpg',
    correctAnswer: 'Chewbacca',
    human: {
      answer: 'Chewbacca',
      isCorrect: true
    },
    autoPlayer: {
      answer: 'Darth Vader',
      isCorrect: false
    }
  },
  {
    id: 2,
    img: '../../../static/assets/img/modes/people/7.jpg',
    correctAnswer: 'Beru Whitesun lars',
    human: {
      answer: 'Beru Whitesun lars',
      isCorrect: true
    },
    autoPlayer: {
      answer: 'Darth Vader',
      isCorrect: false
    }
  },
  {
    id: 3,
    img: '../../../static/assets/img/modes/people/19.jpg',
    correctAnswer: 'Jek Tono Porkins',
    human: {
      answer: 'Chewbacca',
      isCorrect: false
    },
    autoPlayer: {
      answer: 'Jek Tono Porkins',
      isCorrect: true
    }
  },
  {
    id: 4,
    img: '../../../static/assets/img/modes/people/26.jpg',
    correctAnswer: 'Lobot',
    human: {
      answer: 'Lobot',
      isCorrect: true
    },
    autoPlayer: {
      answer: 'Darth Vader',
      isCorrect: false
    }
  }
]; */

const hideModal = () => {
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

const getYodaQuote = (humanPlayer, autoPlayer) => {
  if (humanPlayer > autoPlayer) {
    return 'The force is strong in you young Padawan!';
  } else return 'Much to learn you still have...my young Padawan.';
};

const getStringForEndGame = (
  quote,
  questionsNumber,
  humanAnswers,
  autoPlayerAnswers
) => {
  return `${quote} During 1 minute you have answered ${humanAnswers} / ${questionsNumber} questions. And Google guessed ${autoPlayerAnswers} / ${questionsNumber}.`;
};

const getTextForEndGame = (answersList) => {
  const questionsNumber = answersList.length;

  const human = countCorrectAnswers(answersList, 'human').length;
  const autoPlayer = countCorrectAnswers(answersList, 'autoPlayer').length;

  const text = getStringForEndGame(
    getYodaQuote(human, autoPlayer),
    questionsNumber,
    human,
    autoPlayer
  );
  return text;
};

const createTitle = () => {
  const title = document.createElement('h2');
  title.classList.add('content_title');
  title.innerText = 'GAME OVER';
  return title;
};

const createSummary = (answersList) => {
  const summary = document.createElement('p');
  summary.classList.add('content_summary');
  summary.innerText = getTextForEndGame(answersList);
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

const createTable = (answersList) => {
  const table = document.createElement('table');
  table.classList.add('table');
  const thead = document.createElement('thead');
  thead.classList.add('table_thead');
  const theadTr = document.createElement('tr');
  theadTr.classList.add('table_theadTr');

  const columnNames = ['', 'You', 'Computer', 'Answer'];
  columnNames.forEach((name) => {
    const th = document.createElement('th');
    th.innerText = `${name}`;
    theadTr.appendChild(th);
  });

  thead.appendChild(theadTr);
  table.appendChild(theadTr);

  const tableBody = document.createElement('tbody');
  tableBody.classList.add('table_body');

  answersList.forEach((answer) => {
    const markup = `
        <tr> 
          <td> <img src="${answer.img}" class="table_img"/> </td>
          <td class="table-answer--${
            answer.human.isCorrect ? 'correct' : 'notcorrect'
          }"> ${answer.human.answer} </td>
          <td class="table-answer--${
            answer.autoPlayer.isCorrect ? 'correct' : 'notcorrect'
          }"> ${answer.autoPlayer.answer} </td>
          <td class="table-answer--default"> ${answer.correctAnswer} </td>
        </tr>`;
    tableBody.insertAdjacentHTML('beforeend', markup);
  });

  table.appendChild(tableBody);
  return table;
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

const handleSubmit = (e) => {
  e.preventDefault();
  const input = document.querySelector('.form_name-input');
  const playerName = input.value;
  if (playerName === '') {
    showWarning();
  } else {
    const score = countCorrectAnswers(answersList, 'human').length;
    saveScore(playerName, score);
    input.value = '';
    setTimeout(() => {
      hideModal();
    }, 1000);
  }
};

export const modalContent = (answersList, saveScore) => {
  const content = document.createElement('div');
  content.classList.add('content');

  const title = createTitle();

  const summary = createSummary(answersList);

  const middleContainer = document.createElement('div');
  middleContainer.classList.add('middle_wrapper');

  const img = createHeroImg();
  middleContainer.appendChild(img);

  const rightContainer = document.createElement('div');
  rightContainer.classList.add('right_wrapper');

  const answersHeading = createAnswersHeading();
  rightContainer.appendChild(answersHeading);

  const table = createTable(answersList);
  rightContainer.appendChild(table);

  middleContainer.appendChild(rightContainer);

  const form = document.createElement('form');
  form.classList.add('content_form');

  const nameInput = createNameInput();
  nameInput.addEventListener('focus', () => hideWarning());

  const nameLabel = createNameLabel();
  const warning = createWarning();

  const submitBtn = createSubmitButton();
  submitBtn.addEventListener('click', (e) => handleSubmit(e));

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
