import './Timer.css';
import TextTimer from '../TextTimer/TextTimer';
import LightsaberTimer from '../LightsaberTimer/LightsaberTimer';

export default function Timer(callback = () => null) {
    let minute = 1;
    let sec = 30;
    let allSeconds = (minute * 60 + sec);
    const timerArea = document.createElement('div');
    timerArea.className = 'timerArea';

    let interval = window.setInterval(function () {
        sec--;

        if (minute != 0 && sec === 0) {
            minute--;
            sec = 59;
        }
        if (minute === 0 && sec === 0) {
            clearInterval(interval);
            callback();
        }

        let remainingSeconds = Math.round(((minute * 60 + sec) / allSeconds * 100), 2);
        timerArea.textContent = '';
        timerArea.appendChild(LightsaberTimer(remainingSeconds));
        timerArea.appendChild(TextTimer(minute, sec));

    }, 1000);

    return timerArea;
}