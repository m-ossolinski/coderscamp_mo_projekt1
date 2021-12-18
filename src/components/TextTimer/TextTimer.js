import './TextTimer.css';

export default function TextTimer(callback = () => null) {
    let minute = 1;
    let sec = 30;
    const counterOutput = document.createElement('p');
    counterOutput.className = 'counterOutput';

    function printTime(minute, sec) {
        let remainingTime = `${minute} : ${sec}`;
        if (minute === 0 && sec === 0) {
            clearInterval(interval);
            remainingTime = 'Time end';
            callback();
        } else {
            if (sec < 10) {
                sec = `0${sec}`;
            }
            remainingTime = `Time Left: ${minute}m : ${sec}s`;
        }

        counterOutput.innerText = remainingTime;
    }

    let interval = window.setInterval(function () {
        printTime(minute, sec);
        sec--;

        if (minute != 0 && sec === 0) {
            minute--;
            sec = 59;
        }

    }, 1000);

    return counterOutput;
}