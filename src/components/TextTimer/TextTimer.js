import './TextTimer.css';

export default function TextTimer(minute, sec) {

    const counterOutput = document.createElement('div');
    counterOutput.className = 'counterOutput';
    let remainingTime = `${minute} : ${sec}`;

    if (minute === 0 && sec === 0) {
        remainingTime = 'Time end';
    } else {
        if (sec < 10) {
            sec = `0${sec}`;
        }
        remainingTime = `Time Left: ${minute}m : ${sec}s`;
    }

    counterOutput.innerText = remainingTime;

    return counterOutput;
}