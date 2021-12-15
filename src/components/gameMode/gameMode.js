import './gameMode.css';
import {
  PEOPLE_MODE,
  VEHICLES_MODE,
  STARSHIPS_MODE
} from '../mainMenu/mainMenu';

export const PEOPLE_MODE_QUESTION = 'Who is this Character?';
export const VEHICLES_MODE_QUESTION = 'Do you recognize this vehicle?';
export const STARSHIPS_MODE_QUESTION = 'Do you recognize this starship?';

export const gameMode = (modeQuestion) => {
  const questionContainer = document.createElement('div');

  questionContainer.id = 'question';
  questionContainer.className = 'question';
  questionContainer.setAttribute('data-id', 'question');
  let questionText = document.createTextNode(`MODE: ${modeQuestion}`);
  questionContainer.appendChild(questionText);

  return questionContainer;
};

export const getGameModeQuestion = (gameMode) => {
  switch (gameMode) {
    case PEOPLE_MODE:
      return PEOPLE_MODE_QUESTION;
    case VEHICLES_MODE:
      return VEHICLES_MODE_QUESTION;
    case STARSHIPS_MODE:
      return STARSHIPS_MODE_QUESTION;
  }
};
