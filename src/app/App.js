import createLogo from '../components/swLogo/swLogo';

export const App = ({ options }) => {
  console.log('test');
  document.getElementById('swquiz-app').appendChild(createLogo()); //logo to be placed in final layout
};
