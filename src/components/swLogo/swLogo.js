import './swLogo.css';
import swLogoImg from '../../../static/assets/ui/StarWarsLogo.png';

function createLogo() {
  const swLogo = new Image();
  swLogo.src = swLogoImg;
  swLogo.classList.add('swLogo');
  swLogo.addEventListener('click', function () {
    window.location.reload();
  });
  return swLogo;
}

export default createLogo;
