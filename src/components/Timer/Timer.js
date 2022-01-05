import './Timer.css';
import { TextTimer } from '../TextTimer/TextTimer';
import { LightsaberTimer } from '../LightsaberTimer/LightsaberTimer';
import { convertTimeToSeconds } from '../../utils/helpers/convertTimeToSeconds';
import { modal } from '../modalWindow/modal';
import { gameResultsModal } from '../../components/modalWindowContent/modalWindowContent';
import { Game } from '../../services/game/game';
import { saveFinalScore } from '../../services/rank/saveFinalScore';

export function Timer(gameMode) {
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
    let progressValue = Math.round(
      (convertTimeToSeconds(minutes, seconds) / allSeconds) * 100,
      2
    );
    timerArea.innerHTML = '';
    timerArea.appendChild(LightsaberTimer(progressValue));
    timerArea.appendChild(TextTimer(minutes, seconds));

    if (minutes > 0 && seconds === 0) {
      minutes -= 1;
      seconds = 59;
    }
    if (minutes === 0 && seconds === 0) {
      modal(gameResultsModal(saveFinalScore, gameMode));
      clearInterval(intervalId);
      intervalId = null;
      const timer = document.querySelector('.timerArea');
      timer.remove();
    }
  }, 1000);

  return timerArea;
}
