import './Timer.css';
import { TextTimer } from '../TextTimer/TextTimer';
import { LightsaberTimer } from '../LightsaberTimer/LightsaberTimer';
import { convertTimeToSeconds } from '../../utils/helpers/convertTimeToSeconds';
import { modal } from '../modalWindow/modal';
import { gameResultsModal } from '../../components/modalWindowContent/modalWindowContent';
import { Game } from '../../services/game/game';

// * Example modal data
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
];

export function Timer() {
    let minutes = 1;
    let seconds = 30;
    let allSeconds = convertTimeToSeconds(minutes, seconds);
    const timerArea = document.createElement('div');
    timerArea.className = 'timerArea';

    const initialProgressValue = 100;
    timerArea.appendChild(LightsaberTimer(initialProgressValue));
    timerArea.appendChild(TextTimer(minutes, seconds));

    let intervalId = setInterval(function () {
      seconds -= 1;
      let progressValue = Math.round((convertTimeToSeconds(minutes, seconds) / allSeconds * 100), 2);
      timerArea.innerHTML = '';
      timerArea.appendChild(LightsaberTimer(progressValue));
      timerArea.appendChild(TextTimer(minutes, seconds));

      if (minutes > 0 && seconds === 0) {
        minutes -= 1;
        seconds = 59;
      }
      if (minutes === 0 && seconds === 0) {
        modal(gameResultsModal(answersList, 10));
        clearInterval(intervalId);
        intervalId = null;
      }
    }, 1000);

    return timerArea;
}
