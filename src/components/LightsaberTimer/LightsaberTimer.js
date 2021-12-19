import './LightsaberTimer.css';

export default function LightsaberTimer(progress) {
    const root = document.querySelector(':root');
    root.style.setProperty('--progress', `${progress}%`);
    const saberArea = document.createElement('div');
    saberArea.className = 'saberArea';

    const saberHandle = new Image();
    saberHandle.src = '../../static/assets/ui/LightSaberHandle.png';
    saberHandle.className = 'saberHandle';
    saberHandle.setAttribute('alt', 'Star Wars Saber Handle');
    saberArea.appendChild(saberHandle);

    const saberLight = document.createElement('div');
    saberLight.className = 'saberLight';
    saberArea.appendChild(saberLight);

    return saberArea;
}
