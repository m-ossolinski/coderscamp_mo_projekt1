import './TextTimer.css';

export function TextTimer(minutes, seconds) {
    const counterOutput = document.createElement('div');
    counterOutput.className = 'counterOutput';
    let remainingTime = `${minutes} : ${seconds}`;

    if (minutes === 0 && seconds === 0) {
        remainingTime = 'Time end';
    } else {
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        remainingTime = `Time Left: ${minutes}m : ${seconds}s`;
    }

    counterOutput.innerText = remainingTime;

    return counterOutput;
}