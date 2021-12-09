import '../../styles/mainMenu.css';

const MODE_PEOPLE = 'People';
const MODE_VEHICLES = 'Vehicles';
const MODE_STARSHIPS = 'Starships';

//Created menu container and appended it to a swquiz-app
const menuContainer = document.createElement('div');
menuContainer.classList.add('swquiz-mainmenu');
menuContainer.id = 'menuContainer';
menuContainer.setAttribute('data-testid', 'menuContainer');

const appContainer = document.querySelector('.swquiz-app');
appContainer.appendChild(menuContainer);

//Generated menu items and appended them to a menuContainer
const peopleMenuItem = document.createElement('p');
peopleMenuItem.classList.add('swquiz-mainmenu-item');
peopleMenuItem.id = MODE_PEOPLE.toLowerCase();
menuContainer.setAttribute('data-testid', 'People');
peopleMenuItem.innerText = MODE_PEOPLE;

const vehiclesMenuItem = document.createElement('p');
vehiclesMenuItem.classList.add('swquiz-mainmenu-item');
vehiclesMenuItem.id = MODE_VEHICLES.toLowerCase();
menuContainer.setAttribute('data-testid', 'vehicles');
vehiclesMenuItem.innerText = MODE_VEHICLES;

const starshipsMenuItem = document.createElement('p');
starshipsMenuItem.classList.add('swquiz-mainmenu-item');
starshipsMenuItem.id = MODE_STARSHIPS.toLowerCase();
menuContainer.setAttribute('data-testid', 'starships');
starshipsMenuItem.innerText = MODE_STARSHIPS;

menuContainer.appendChild(peopleMenuItem);
menuContainer.appendChild(vehiclesMenuItem);
menuContainer.appendChild(starshipsMenuItem);

const mainMenu = [peopleMenuItem, vehiclesMenuItem, starshipsMenuItem];

mainMenu.forEach((element) => {
  element.addEventListener('click', function () {
    mainMenu.forEach((item) => item.classList.remove('selected'));

    this.classList.add('selected');
  });
});

export default mainMenu;
