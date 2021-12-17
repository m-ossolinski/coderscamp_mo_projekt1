import './mainMenu.css';

export const PEOPLE_MODE = 'People';
export const VEHICLES_MODE = 'Vehicles';
export const STARSHIPS_MODE = 'Starships';

export function setGameMode(mode) {
  mode = mode.textContent || mode;
  window.globalThis.activeGameMode = mode;
}

export function getGameMode() {
  return window.globalThis.activeGameMode;
}

const createMenuItem = (className, textContent, onClickCallback) => {
  const item = document.createElement('p');
  item.classList.add(className);
  item.textContent = textContent;
  item.setAttribute('data-test', 'menuItem');
  item.addEventListener('click', function () {
    for (let item of this.parentNode.children) {
      item.classList.remove('selected');
    }
    this.classList.add('selected');
    onClickCallback(this);
  });
  return item;
};

const createMainMenu = (settingGameModeCallback) => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('swquiz-mainmenu');
  menuContainer.id = 'menuContainer';
  menuContainer.setAttribute('data-test', 'menuContainer');

  const itemPeople = createMenuItem(
    'swquiz-mainmenu-item',
    PEOPLE_MODE,
    settingGameModeCallback
  );
  itemPeople.classList.add('selected');
  setGameMode(PEOPLE_MODE);
  menuContainer.appendChild(itemPeople);
  menuContainer.appendChild(
    createMenuItem(
      'swquiz-mainmenu-item',
      VEHICLES_MODE,
      settingGameModeCallback
    )
  );
  menuContainer.appendChild(
    createMenuItem(
      'swquiz-mainmenu-item',
      STARSHIPS_MODE,
      settingGameModeCallback
    )
  );

  return menuContainer;
};

export { createMainMenu };
