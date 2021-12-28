import './answersCard.css';
import isAnswerCorrect from '../../services/game/isAnswerCorrect';

export function answersCard(possibleAnswers, correctAnswer, savePlayerAnswers) {
  if (!Array.isArray(possibleAnswers))
    throw new Error('possibleAnswers array is not an array');
  if (possibleAnswers.length === 0)
    throw new Error('possibleAnswers array has no content');
  if (typeof correctAnswer !== 'string')
    throw new Error('correctAnswer must be a string');
  if (typeof savePlayerAnswers !== 'function')
    throw new Error('savePlayerAnswers should be a function');

  const swquiz = document.getElementById('swquiz-app');
  const wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'answer__wrapper');

  possibleAnswers.forEach((answer) => {
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

      if (isAnswerCorrect(correctAnswer, selectedAnswer)) {
        button.classList.add('answer__button--correct');
        savePlayerAnswers(selectedAnswer, true);
      } else {
        button.classList.add('answer__button--wrong');
        savePlayerAnswers(selectedAnswer, false);
      }
    });
  });
}