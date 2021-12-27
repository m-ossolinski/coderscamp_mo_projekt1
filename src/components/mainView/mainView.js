import './mainView.css';

import createLogo from '../swLogo/swLogo';
import {createMainMenu} from '../mainMenu/mainMenu';
import createImgElementPeopleMode from '../recognitionImg/ImgModePeople/ImgModePeople';
import {gameMode as createGameMode, getGameModeQuestion} from '../gameMode/gameMode';
import {createGameRulesComponent} from '../gameRules/gameRules';
import redButton from '../redButton/redButton';
import whiteButton from '../whiteButton/whiteButton';
import toggleModeRulesVisibility from '../../services/game/toggleModeRulesVisibility';

function createWrapper(className, nodeName) {
  const isCorrectClassName = typeof className === 'string' && className.length > 2;
  if(!isCorrectClassName) throw new Error('Argument className is invalid');

  const isCorrectNodeName = typeof className === 'string' && className.length > 2;
  if(!isCorrectNodeName) throw new Error('Argument nodeName is invalid');

  const container = document.createElement(nodeName);
  container.classList.add(className);

  return container;
}

function createComponentsData(imgData, gameMode, answer) {
  const components = [
    {
      nodeName: 'nav',
      className: 'navigation',
      children: [
        {component: createLogo(), containerClassName: 'logo-container', containerNodeName: 'div'},
        {component: createMainMenu(), containerClassName: 'main-menu-container', containerNodeName: 'div'},
      ],
    },
    {
      nodeName: 'main',
      className: 'main',
      children: [
        {component: createImgElementPeopleMode(imgData), containerClassName: 'image-container', containerNodeName: 'div'},
        {component: createGameMode(getGameModeQuestion(gameMode)), containerClassName: 'game-mode-container', containerNodeName: 'div'},
        {component: createGameRulesComponent(gameMode, answer), containerClassName: 'mode-rules-container', containerNodeName: 'div'},
        {component: whiteButton('../../static/assets/ui/icons/contacts_24px.png', 'Hall of fame', toggleModeRulesVisibility), containerClassName: 'btn-container', containerNodeName: 'div'},
        {component: redButton('Play the game'), containerClassName: 'btn-container', containerNodeName: 'div'},
      ],
    },
  ];

  return components;
}

function getComponents(componentsData) {
  const isArray = Array.isArray(componentsData);
  if(!isArray) throw new Error('componentsData is not an array');

  const componnets = componentsData.map(({nodeName, className, children}) => {
    const wrapper = createWrapper(className, nodeName);

    children.forEach(({component, containerClassName, containerNodeName}) => {
      const container = createWrapper(containerClassName, containerNodeName);
      container.appendChild(component);
      wrapper.appendChild(container);
    });

    return wrapper;
  });

  return componnets;
}

export default function createMainView(imgData, gameRulesData) {

  const isCorrectImageData = typeof imgData === 'string';
  if(!isCorrectImageData) throw new Error('Argument imgData have to be a string');

  const {gameMode, answer} = gameRulesData;
  const isCorrectGameRulesData = typeof (gameMode + answer) === 'string';
  if(!isCorrectGameRulesData) throw new Error('Argument gameRulesData have to be a string');

  const mainViewComponent = document.createElement('div');
  mainViewComponent.classList.add('main-view');

  const components = getComponents(createComponentsData(imgData, gameMode, answer));
  console.log(components);
  components.forEach(component => {
    mainViewComponent.appendChild(component);
  });

  return mainViewComponent;
}