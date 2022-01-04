import generateQuestionForTheGameMode from '../../services/game/generateQuestions';
import createImgElementPeopleMode from '../../components/recognitionImg/ImgModePeople/ImgModePeople';
import {
  gameMode as createGameMode,
  getGameModeQuestion
} from '../../components/gameMode/gameMode';
import { createAnswersCards } from '../../components/answersCard/answersCard';

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

export const showNextQuestion = async (gameMode) => {
  const quizGameView = document.querySelector('.main-quiz-game');
  const spinner = document.querySelector('.sk-circle');
  spinner.classList.remove('hide');
  const spinnerVisibilityTime = 1500;

  const question = await generateQuestionForTheGameMode(gameMode);
  const { answers, rightAnswer, image } = question;

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

  answersCardsWrapper.appendChild(
    createAnswersCards(
      answers,
      rightAnswer,
      () => {
        console.log('click');
      },
      gameMode
    )
  );

  questionsArea.appendChild(imageWrapper);
  questionsArea.appendChild(gameModeWrapper);
  questionsArea.appendChild(answersCardsWrapper);

  setTimeout(async () => {
    /* do rozwiazania - ten komponent musi byc dodany jako pierwsze dziecko */
    quizGameView.appendChild(questionsArea);
    spinner.classList.add('hide');
  }, spinnerVisibilityTime);
};
