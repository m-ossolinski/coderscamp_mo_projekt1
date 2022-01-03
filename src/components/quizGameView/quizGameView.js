import './quizGameView.css';
import createImgElementPeopleMode from '../recognitionImg/ImgModePeople/ImgModePeople';
import {
  gameMode as createGameMode,
  getGameModeQuestion
} from '../gameMode/gameMode';
import { createAnswersCards } from '../answersCard/answersCard';
import { Timer } from '../Timer/Timer';
import generateQuestionForTheGameMode from '../../services/game/generateQuestions';

function createWrapperForComponent(className, nodeName) {
  if (typeof className !== 'string' && className.length < 2)
    throw new Error(
      'An error occurred while create wrapper for components: argument className have to be a string type and have a length of at least 2'
    );
  if (typeof className !== 'string' && className.length < 2)
    throw new Error(
      'An error occurred while create wrapper for components: argument className have to be a string type and have a length of at least 2'
    );

  const componentWrapper = document.createElement(nodeName);
  componentWrapper.classList.add(className);

  return componentWrapper;
}

export async function createQuizGameView(gameMode = 'people') {
  const question = await generateQuestionForTheGameMode(gameMode);
  const { answers, rightAnswer, image } = question;

  const quizGameView = document.createElement('main');
  quizGameView.classList.add('main-quiz-game');

  const imageWrapper = createWrapperForComponent('image-container', 'div');
  imageWrapper.appendChild(createImgElementPeopleMode(image));

  const gameModeWrapper = createWrapperForComponent(
    'game-mode-container',
    'div'
  );
  gameModeWrapper.appendChild(createGameMode(getGameModeQuestion(gameMode)));

  const answersCardsWrapper = createWrapperForComponent(
    'answers-card-container',
    'div'
  );

  answersCardsWrapper.appendChild(
    createAnswersCards(answers, rightAnswer, () => {
      console.log('click');
    })
  );

  const timerContainer = createWrapperForComponent('timer-container', 'div');
  timerContainer.appendChild(Timer());

  quizGameView.appendChild(imageWrapper);
  quizGameView.appendChild(gameModeWrapper);
  quizGameView.appendChild(answersCardsWrapper);
  quizGameView.appendChild(timerContainer);

  return quizGameView;
}
