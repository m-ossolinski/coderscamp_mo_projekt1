import '../../styles/mainMenu.css';

const mainMenu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('swquiz-mainmenu');
  menuContainer.id = 'menuContainer';
  menuContainer.setAttribute('data-testid', 'menuContainer');

  const appContainer = document.querySelector('.swquiz-app');
  appContainer.appendChild(menuContainer);

  const peopleMenuItem = document.createElement('p');
  peopleMenuItem.classList.add('swquiz-mainmenu-item');
  peopleMenuItem.id = 'people';
  menuContainer.setAttribute('data-testid', 'people');
  peopleMenuItem.innerText = 'People';

  const vehiclesMenuItem = document.createElement('p');
  vehiclesMenuItem.classList.add('swquiz-mainmenu-item');
  vehiclesMenuItem.id = 'vehicles';
  menuContainer.setAttribute('data-testid', 'vehicles');
  vehiclesMenuItem.innerText = 'Vehicles';

  const starshipsMenuItem = document.createElement('p');
  starshipsMenuItem.classList.add('swquiz-mainmenu-item');
  starshipsMenuItem.id = 'starships';
  menuContainer.setAttribute('data-testid', 'starships');
  starshipsMenuItem.innerText = 'Starships';

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
};

export { mainMenu };
