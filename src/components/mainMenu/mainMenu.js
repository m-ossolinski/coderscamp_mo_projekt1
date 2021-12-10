import './mainMenu.css';

const PEOPLE_MODE = 'People';
const VEHICLES_MODE = 'Vehicles';
const STARSHIPS_MODE = 'Starships';

function mainMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('swquiz-mainmenu');
  menuContainer.id = 'swquiz-mainmenu';
  menuContainer.setAttribute('data-testid', 'swquiz-mainmenu');

  const peopleMenuItem = document.createElement('p');
  peopleMenuItem.classList.add('swquiz-mainmenu-item');
  peopleMenuItem.id = PEOPLE_MODE.toLowerCase();
  peopleMenuItem.setAttribute('data-testid', PEOPLE_MODE.toLowerCase());
  peopleMenuItem.innerText = PEOPLE_MODE;

  const vehiclesMenuItem = document.createElement('p');
  vehiclesMenuItem.classList.add('swquiz-mainmenu-item');
  vehiclesMenuItem.id = VEHICLES_MODE.toLowerCase();
  vehiclesMenuItem.setAttribute('data-testid', VEHICLES_MODE.toLowerCase());
  vehiclesMenuItem.innerText = VEHICLES_MODE;

  const starshipsMenuItem = document.createElement('p');
  starshipsMenuItem.classList.add('swquiz-mainmenu-item');
  starshipsMenuItem.id = STARSHIPS_MODE.toLowerCase();
  starshipsMenuItem.setAttribute('data-testid', STARSHIPS_MODE.toLowerCase());
  starshipsMenuItem.innerText = STARSHIPS_MODE;

  menuContainer.appendChild(peopleMenuItem);
  menuContainer.appendChild(vehiclesMenuItem);
  menuContainer.appendChild(starshipsMenuItem);

  const mainMenuItems = [peopleMenuItem, vehiclesMenuItem, starshipsMenuItem];

  mainMenuItems.forEach((item) => {
    item.addEventListener('click', function () {
      mainMenuItems.forEach((item) => item.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  return menuContainer;
}

export { mainMenu };
