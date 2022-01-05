export function changeGameModeText() {
  const gameModeElement = document.getElementById('question');
  const gameModeElementText = gameModeElement.textContent;
  const newGameModeElementText =  gameModeElementText.replace('MODE: ', 'Question: ');
  gameModeElement.textContent = newGameModeElementText;
}