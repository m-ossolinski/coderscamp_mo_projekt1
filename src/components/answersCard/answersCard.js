import './answersCard.css';
import isAnswerCorrect from '../../services/game/isAnswerCorrect';
import { showGamePanel } from '../../services/game/showGamePanel';

export function createAnswersCards(
  possibleAnswers,
  correctAnswer,
  savePlayerAnswers
) {
  if (!Array.isArray(possibleAnswers))
    throw new Error('possibleAnswers array is not an array');
  if (possibleAnswers.length === 0)
    throw new Error('possibleAnswers array has no content');
  if (typeof correctAnswer !== 'string')
    throw new Error('correctAnswer must be a string');
  if (typeof savePlayerAnswers !== 'function')
    throw new Error('savePlayerAnswers should be a function');

  const answersCardsComponent = document.createElement('div');
  answersCardsComponent.setAttribute('class', 'answer__wrapper');

  possibleAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.setAttribute('class', 'answer__button');
    button.classList.remove('answer__button--correct', 'answer__button--wrong');

    const label = document.createElement('span');
    label.appendChild(document.createTextNode(answer));
    label.setAttribute('class', 'answer__button--label');

    button.appendChild(label);
    answersCardsComponent.appendChild(button);

    button.addEventListener('click', () => {
      const selectedAnswer = button.textContent;

      if (isAnswerCorrect(correctAnswer, selectedAnswer)) {
        button.classList.add('answer__button--correct');
        savePlayerAnswers(selectedAnswer, true);

        setTimeout(() => {
          const prevGameView = document.querySelector('.main-quiz-game');
          prevGameView.remove();
          showGamePanel();
        }, 1500);
      } else {
        button.classList.add('answer__button--wrong');
        savePlayerAnswers(selectedAnswer, false);
        setTimeout(() => {
          const prevGameView = document.querySelector('.main-quiz-game');
          prevGameView.remove();
          showGamePanel();
        }, 1500);
      }
    });
  });

  return answersCardsComponent;
}
