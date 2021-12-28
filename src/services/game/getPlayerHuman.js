import Player from '../player/player';

export function getPlayerHuman(palyernName, points) {
  const playerHuman = new Player(palyernName, points);
  return playerHuman;
}
