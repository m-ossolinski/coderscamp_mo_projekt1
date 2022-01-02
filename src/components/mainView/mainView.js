import './mainView.css';
import generateQuestionForTheGameMode from '../../services/game/generateQuestions';
import createLogo from '../swLogo/swLogo';
import { createMainMenu } from '../mainMenu/mainMenu';
import createImgElementPeopleMode from '../recognitionImg/ImgModePeople/ImgModePeople';
import {
  gameMode as createGameMode,
  getGameModeQuestion
} from '../gameMode/gameMode';
import { createGameRulesComponent } from '../gameRules/gameRules';
import redButton from '../redButton/redButton';
import { whiteButton } from '../whiteButton/whiteButton';
import { toggleGameRulesVisibility } from '../../services/game/toggleGameRulesVisibility';
import { showGamePanel } from '../../services/game/showGamePanel';
import { selectGameMode } from '../../services/game/selectGameMode';
import { getRanking } from '../ranking/ranking';

function createWrapperForComponent(className, nodeName) {
  if (typeof className !== 'string' && className.length < 2)
    throw new Error(
      'An error occurred while create wrapper for components: argument className have to be a string type and have a length of at least 2'
    );
  if (typeof className !== 'string' && className.length < 2)
    throw new Error(
      'An error occurred while create wrapper for components: argument className have to be a string type and have a length of at least 2'
    );

  const componentWrapper = document.createElement(nodeName);
  componentWrapper.classList.add(className);

  return componentWrapper;
}

function prepareNavigationData() {
  return [
    {
      nodeName: 'nav',
      className: 'navigation',
      children: [
        {
          component: createLogo(),
          containerClassName: 'logo-container',
          containerNodeName: 'div'
        },
        {
          component: createMainMenu(selectGameMode),
          containerClassName: 'main-menu-container',
          containerNodeName: 'div'
        }
      ]
    }
  ];
}

function prepareMainData(imgData, gameMode, answer) {
  return [
    {
      nodeName: 'main',
      className: 'main',
      children: [
        {
          component: createImgElementPeopleMode(imgData),
          containerClassName: 'image-container',
          containerNodeName: 'div'
        },
        {
          component: createGameMode(getGameModeQuestion(gameMode)),
          containerClassName: 'game-mode-container',
          containerNodeName: 'div'
        },
        {
          component: getRanking(),
          containerClassName: 'ranking-container',
          containerNodeName: 'div'
        },
        {
          component: createGameRulesComponent(gameMode, answer),
          containerClassName: 'mode-rules-container',
          containerNodeName: 'div'
        },
        {
          component: whiteButton(
            '../../static/assets/ui/icons/contacts_24px.png',
            'Hall of fame',
            toggleGameRulesVisibility
          ),
          containerClassName: 'btn-container',
          containerNodeName: 'div'
        },
        {
          component: redButton('Play the game', showGamePanel),
          containerClassName: 'btn-container',
          containerNodeName: 'div'
        }
      ]
    }
  ];
}

function getComponentsForNavigation(componentsData) {
  if (!Array.isArray(componentsData))
    throw new Error(
      'An error occurred while get components for navigation: argument componentsData is not an array'
    );
  const componentsForNavigation = componentsData.map(
    ({ nodeName, className, children }) => {
      const wrapper = createWrapperForComponent(className, nodeName);

      children.forEach(
        ({ component, containerClassName, containerNodeName }) => {
          const container = createWrapperForComponent(
            containerClassName,
            containerNodeName
          );
          container.appendChild(component);
          wrapper.appendChild(container);
        }
      );

      return wrapper;
    }
  );

  return componentsForNavigation[0];
}

function getComponentsForMain(componentsData) {
  if (!Array.isArray(componentsData))
    throw new Error(
      'An error occurred while get components for main view: argument componentsData is not an array'
    );

  const componentsForMain = componentsData.map(
    ({ nodeName, className, children }) => {
      const wrapper = createWrapperForComponent(className, nodeName);

      children.forEach(
        ({ component, containerClassName, containerNodeName }) => {
          const container = createWrapperForComponent(
            containerClassName,
            containerNodeName
          );
          container.appendChild(component);
          wrapper.appendChild(container);
        }
      );

      return wrapper;
    }
  );

  return componentsForMain[0];
}

export const createGamePanel = async (mode) => {
  const question = await generateQuestionForTheGameMode(mode);

  const mainComponents = getComponentsForMain(
    prepareMainData(question.image, mode, question.rightAnswer)
  );

  return mainComponents;
};

export const createMainView = async (mode = 'people') => {
  const mainViewComponent = document.createElement('div');
  mainViewComponent.classList.add('main-view');

  const navigation = getComponentsForNavigation(prepareNavigationData());

  mainViewComponent.appendChild(navigation);

  const spinner = document.querySelector('.sk-circle');
  spinner.classList.remove('hide');

  const gamePanel = await createGamePanel(mode);

  spinner.classList.add('hide');

  mainViewComponent.appendChild(gamePanel);

  return mainViewComponent;
};
