import './gameAnswers.css';
import isAnswerCorrect from '../../services/game/isAnswerCorrect';

export function gameAnswers(answers, rightAnswer, callback) {
  if (!Array.isArray(answers)) throw new Error('Answers array is not an array');
  if (answers.length === 0) throw new Error('Answers array has no content');
  if (typeof rightAnswer !== 'string')
    throw new Error('rightAnswer must be a string');
  if (typeof callback !== 'function')
    throw new Error('callback should be a function');

  const swquiz = document.getElementById('swquiz-app');
  const wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'answer__wrapper');

  answers.forEach((answer) => {
    const button = document.createElement('button');
    button.setAttribute('class', 'answer__button');
    button.classList.remove('answer__button--correct', 'answer__button--wrong');

    const label = document.createElement('span');
    label.appendChild(document.createTextNode(answer));
    label.setAttribute('class', 'answer__button--label');

    button.appendChild(label);
    wrapper.appendChild(button);
    swquiz.appendChild(wrapper);

    button.addEventListener('click', () => {
      const selectedAnswer = button.textContent;
      const checkAnswer = isAnswerCorrect(rightAnswer, selectedAnswer);

      if (checkAnswer === true) {
        button.classList.add('answer__button--correct');
        callback(selectedAnswer, true);
      } else {
        button.classList.add('answer__button--wrong');
        callback(selectedAnswer, false);
      }
    });
  });
}
