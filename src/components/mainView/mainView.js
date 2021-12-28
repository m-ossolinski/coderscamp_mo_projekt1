import './mainView.css';
import createLogo from '../swLogo/swLogo';
import { createMainMenu } from '../mainMenu/mainMenu';
import createImgElementPeopleMode from '../recognitionImg/ImgModePeople/ImgModePeople';
import { gameMode as createGameMode, getGameModeQuestion } from '../gameMode/gameMode';
import { createGameRulesComponent } from '../gameRules/gameRules';
import redButton from '../redButton/redButton';
import whiteButton from '../whiteButton/whiteButton';
import  { toggleGameRulesVisibility }  from '../../services/game/toggleGameRulesVisibility';

function createWrapperForComponent(className, nodeName) {
  if(typeof className !== 'string' && className.length < 2) throw new Error('An error occurred while create wrapper for components: argument className have to be a string type and have a length of at least 2');
  if(typeof className !== 'string' && className.length < 2) throw new Error('An error occurred while create wrapper for components: argument className have to be a string type and have a length of at least 2');

  const componentWrapper = document.createElement(nodeName);
  componentWrapper.classList.add(className);

  return componentWrapper;
}

function prepareMainViewComponents(imgData, gameMode, answer) {
  const componentsData = [
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
        {component: whiteButton('../../static/assets/ui/icons/contacts_24px.png', 'Hall of fame', toggleGameRulesVisibility), containerClassName: 'btn-container', containerNodeName: 'div'},
        {component: redButton('Play the game'), containerClassName: 'btn-container', containerNodeName: 'div'},
      ],
    },
  ];

  return componentsData;
}

function getComponentsForMainView(componentsData) {
  if(!Array.isArray(componentsData)) throw new Error('An error occurred while get components for main view: argument componentsData is not an array');

  const componentsForMainView = componentsData.map(({ nodeName, className, children }) => {
    const wrapper = createWrapperForComponent(className, nodeName);

    children.forEach(({component, containerClassName, containerNodeName}) => {
      const container = createWrapperForComponent(containerClassName, containerNodeName);
      container.appendChild(component);
      wrapper.appendChild(container);
    });

    return wrapper;
  });

  return componentsForMainView;
}

export function createMainView(imgData, gameRulesData) {
  if(typeof imgData !== 'string') throw new Error('An error occurred while create main view: argument imgData have to be a string');

  const {gameMode, answer} = gameRulesData;
  if(typeof gameMode !== 'string' && typeof answer !== 'string') throw new Error('An error occurred while create main view: argument gameRulesData have to be a string');

  const mainViewComponent = document.createElement('div');
  mainViewComponent.classList.add('main-view');

  const mainViewComponents = getComponentsForMainView(prepareMainViewComponents(imgData, gameMode, answer));

  mainViewComponents.forEach(component => {
    mainViewComponent.appendChild(component);
  });

  return mainViewComponent;
}