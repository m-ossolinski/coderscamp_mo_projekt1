import './whiteButton.css';

export default function whiteButton(iconSrc, text, callback) {

  if(typeof iconSrc !== 'string') throw new Error('An error occurred while creating white button: argument iconSrc have to be a string type');
  if(typeof text !== 'string') throw new Error('An error occurred while creating white button: argument text have to be a string type');
  if(typeof callback !== 'function') throw new Error('An error occurred while creating white button: argument callback have to be a function');

  const btnWhite = document.createElement('button');
  btnWhite.className = 'btnWhite';

  const icon = document.createElement('img');
  icon.src = iconSrc;
  icon.className = 'icon';
  btnWhite.appendChild(icon);

  text = text.charAt(0).toUpperCase() + text.slice(1);
  const textElement = document.createElement('span');
  textElement.innerHTML = text;
  textElement.className = 'text';
  btnWhite.appendChild(textElement);
  btnWhite.onclick = callback;

  return btnWhite;

}
