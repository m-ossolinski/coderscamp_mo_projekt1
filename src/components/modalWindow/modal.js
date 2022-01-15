import './modal.css';

export function modal(component, callback) {
  const swquiz = document.getElementById('swquiz-app');

  const backdrop = document.createElement('div');
  backdrop.setAttribute('id', 'backdrop');
  swquiz.appendChild(backdrop);

  const modal = document.createElement('aside');
  modal.setAttribute('id', 'modal');
  modal.setAttribute('class', 'overlay');
  modal.appendChild(component);
  swquiz.appendChild(modal);

  modal.addEventListener('click', callback);
}

export function closeModal() {
  const modal = document.getElementById('modal');
  const backdrop = document.getElementById('backdrop');
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}
