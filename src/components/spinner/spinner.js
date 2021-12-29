import './spinner.css';
/* spinner belongs to https://github.com/tobiasahlin/SpinKit */

export const spinner = () => {
  const skCircle = document.createElement('div');
  skCircle.classList.add('sk-circle', 'hide');

  for (let i = 1; i <= 12; i++) {
    const div = document.createElement('div');
    div.classList.add(`sk-circle${i}`, 'sk-child');
    skCircle.appendChild(div);
  }

  return skCircle;
};
