export function toggleButtonText(modeRulesClassList) {
  const buttonText = document.querySelector('.btnWhite span');
  let btnIcon = document.querySelector('.btnWhite img');

  const isModeRulesHidden = modeRulesClassList.contains('cover');
  if(isModeRulesHidden) {
    btnIcon.setAttribute('src', '../../static/assets/ui/icons/school_24px.png');
    buttonText.textContent = 'Rules';
  } else {
    btnIcon.setAttribute('src', '../../static/assets/ui/icons/contacts_24px.png');
    buttonText.textContent = 'Hall of fame';
  }
}