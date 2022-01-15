import './quizGameView.css';
import createImgElementPeopleMode from '../recognitionImg/ImgModePeople/ImgModePeople';
import {
  gameMode as createGameMode,
  getGameModeQuestion
} from '../gameMode/gameMode';
import { createAnswersCards } from '../answersCard/answersCard';
import { Timer } from '../Timer/Timer';
import generateQuestionForTheGameMode from '../../services/game/generateQuestions';
import { saveAnswer } from '../../services/player/player';
import { getAutoPlayer } from '../../services/player/autoPlayer';

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

export function closeQuizGamePanel() {
  const quizGamePanel = document.querySelector('.main-quiz-game');
  quizGamePanel.remove();
}

export async function createQuizGameView(gameMode = 'people') {
  const question = await generateQuestionForTheGameMode(gameMode);
  const { answers, rightAnswer, image } = question;

  const quizGameView = document.createElement('main');
  quizGameView.classList.add('main-quiz-game');

  const questionsArea = document.createElement('div');
  questionsArea.classList.add('main-questions-area');

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

  const computer = getAutoPlayer();
  const autoPlayer = await computer.getAnswer(image, answers);

  const questionSaved = {
    id: 1,
    img: image,
    correctAnswer: rightAnswer,
    autoPlayer: {
      answer: autoPlayer,
      isCorrect: autoPlayer === rightAnswer ? true : false
    }
  };

  const game = [];
  localStorage.setItem('Game', JSON.stringify(game));

  answersCardsWrapper.appendChild(
    createAnswersCards(
      answers,
      rightAnswer,
      saveAnswer,
      gameMode,
      questionSaved
    )
  );

  const timerContainer = createWrapperForComponent('timer-container', 'div');
  timerContainer.appendChild(Timer(gameMode));

  questionsArea.appendChild(imageWrapper);
  questionsArea.appendChild(gameModeWrapper);
  questionsArea.appendChild(answersCardsWrapper);
  quizGameView.appendChild(questionsArea);
  quizGameView.appendChild(timerContainer);

  return quizGameView;
}
