import './mainMenu.css';
import { selectGameMode } from '../../services/game/selectGameMode';

export const PEOPLE_MODE = 'people';
export const VEHICLES_MODE = 'vehicles';
export const STARSHIPS_MODE = 'starships';

function createMainMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('swquiz-mainmenu');
  menuContainer.id = 'swquiz-mainmenu';
  menuContainer.setAttribute('data-id', 'swquiz-mainmenu');

  const peopleMenuItem = document.createElement('p');
  peopleMenuItem.classList.add('swquiz-mainmenu-item', 'selected');
  peopleMenuItem.id = PEOPLE_MODE;
  peopleMenuItem.setAttribute('data-id', PEOPLE_MODE);
  peopleMenuItem.innerText = 'People';

  const vehiclesMenuItem = document.createElement('p');
  vehiclesMenuItem.classList.add('swquiz-mainmenu-item');
  vehiclesMenuItem.id = VEHICLES_MODE;
  vehiclesMenuItem.setAttribute('data-id', VEHICLES_MODE);
  vehiclesMenuItem.innerText = 'Vehicles';

  const starshipsMenuItem = document.createElement('p');
  starshipsMenuItem.classList.add('swquiz-mainmenu-item');
  starshipsMenuItem.id = STARSHIPS_MODE;
  starshipsMenuItem.setAttribute('data-id', STARSHIPS_MODE);
  starshipsMenuItem.innerText = 'Starships';

  menuContainer.appendChild(peopleMenuItem);
  menuContainer.appendChild(vehiclesMenuItem);
  menuContainer.appendChild(starshipsMenuItem);

  const mainMenuItems = [peopleMenuItem, vehiclesMenuItem, starshipsMenuItem];

  mainMenuItems.forEach((item) => {
    item.addEventListener('click', function () {
      if(document.querySelector('.main-quiz-game')) return;
      selectGameMode(item);
      mainMenuItems.forEach((item) => item.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  return menuContainer;
}

export { createMainMenu };
