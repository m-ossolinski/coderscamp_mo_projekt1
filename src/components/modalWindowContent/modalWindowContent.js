import './modalWindowContent.css';

const answersList = [
  {
    id: 1,
    img: '../../static/assets/img/modes/people/13.jpg',
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
    img: '../..//static/assets/img/modes/people/7.jpg',
    correctAnswer: 'Beru Whitesun lars',
    human: {
      answer: 'Beru Whitesun lars',
      isCorrect: true
    },
    autoPlayer: {
      answer: 'Darth Vader',
      isCorrect: false
    }
  }
];

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

export const modalContent = (/*answersList, saveScore*/) => {
  const content = document.createElement('div');
  content.classList.add('content');

  const title = document.createElement('h2');
  title.classList.add('content_title');
  title.innerText = 'GAME OVER';

  const summary = document.createElement('p');
  summary.classList.add('content_summary');
  summary.innerText = getTextForEndGame(answersList);

  const middleContainer = document.createElement('div');
  middleContainer.classList.add('middle_wrapper');

  const img = new Image();
  img.classList.add('middle-wrapper_img');
  img.src = '../../static/assets/ui/MasterYodaLeft.png';
  img.alt = 'MasterYoda';
  middleContainer.appendChild(img);

  const rightContainer = document.createElement('div');
  rightContainer.classList.add('right_wrapper');

  const answersHeading = document.createElement('h3');
  answersHeading.classList.add('right-wrapper_title');
  answersHeading.innerText = 'Detailed answers:';
  rightContainer.appendChild(answersHeading);

  const getAnswers = () => {
    const answersContainer = document.createElement('div');
    answersContainer.classList.add('answers');

    const columnNames = ['', 'You', 'Computer', 'Answer'];
    columnNames.forEach((name) => {
      // moze jako tablice ?
    });
  };

  middleContainer.appendChild(rightContainer);

  const form = document.createElement('form');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting the form');
    // input musi byc walidowany w funkcji submit//
    /*savescore(imie gracza, punktacja)*/
  };
  form.classList.add('content_form');

  const nameInput = document.createElement('input');
  nameInput.classList.add('form_name-input');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('placeholder', 'Type your name here');

  const nameLabel = document.createElement('label');
  nameLabel.classList.add('form_name-label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.innerText =
    'Please fill your name in order to receive eternal glory in whole Galaxy!';

  const submitBtn = document.createElement('button');
  submitBtn.classList.add('form_submitBtn');
  submitBtn.setAttribute('type', 'submit');
  const submitTxt = 'may the force be with you';
  submitBtn.innerText = submitTxt.toUpperCase();
  submitBtn.addEventListener('click', (e) => handleSubmit(e));

  form.appendChild(nameInput);
  form.appendChild(nameLabel);
  form.appendChild(submitBtn);

  content.appendChild(title);
  content.appendChild(summary);
  content.appendChild(middleContainer);
  content.appendChild(form);
  console.log(content);
  return content;
};
