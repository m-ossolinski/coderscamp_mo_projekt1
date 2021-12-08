const mainMenu = document
  .querySelector('.swquiz-mainmenu')
  .querySelectorAll('p');

mainMenu.forEach((element) => {
  element.addEventListener('click', function () {
    mainMenu.forEach((item) => item.classList.remove('selected'));

    this.classList.add('selected');
  });
});

export default mainMenu;
