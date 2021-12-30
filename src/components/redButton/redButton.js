import './redButton.css';

export default function redButton(displayText, showGamePanel) {
  const button = document.createElement('button');
  const label = document.createElement('span');
  label.appendChild(document.createTextNode(`${displayText}`));
  label.setAttribute('class', 'btn--label');
  button.setAttribute('id', 'redButton');
  button.setAttribute('class', 'btn btn--red');
  button.append(label);
  button.addEventListener('click', showGamePanel);
  return button;
}
