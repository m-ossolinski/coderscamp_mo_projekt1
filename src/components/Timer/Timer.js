import './Timer.css';
import { TextTimer } from '../TextTimer/TextTimer';
import { LightsaberTimer } from '../LightsaberTimer/LightsaberTimer';
import { convertTimeToSeconds } from '../../utils/helpers/convertTimeToSeconds';

export function Timer() {
    let minutes = 1;
    let seconds = 30;
    let allSeconds = convertTimeToSeconds(minutes, seconds);
    const timerArea = document.createElement('div');
    timerArea.className = 'timerArea';

    const initialProgressValue = 100;
    timerArea.appendChild(LightsaberTimer(initialProgressValue));
    timerArea.appendChild(TextTimer(minutes, seconds));

    let interval = window.setInterval(function () {
        seconds--;

        if (minutes != 0 && seconds === 0) {
            minutes--;
            seconds = 59;
        }
        if (minutes === 0 && seconds === -1) {
            return clearInterval(interval);
        }

        let progressValue = Math.round((convertTimeToSeconds(minutes, seconds) / allSeconds * 100), 2);
        timerArea.textContent = '';
        timerArea.appendChild(LightsaberTimer(progressValue));
        timerArea.appendChild(TextTimer(minutes, seconds));

    }, 1000);

    return timerArea;
}
