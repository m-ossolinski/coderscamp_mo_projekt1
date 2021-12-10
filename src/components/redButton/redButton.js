import './redButton.css';

export default function redButton(displayText) {
  const app = document.getElementById('swquiz-app');
  const button = document.createElement('button');
  const label = document.createElement('span');
  label.appendChild(document.createTextNode(`${displayText}`));
  label.setAttribute('class', 'btn--label');
  button.setAttribute('id', 'redButton');
  button.setAttribute('class', 'btn btn--red');
  button.append(label);
  app.appendChild(button);
  return button;
}
