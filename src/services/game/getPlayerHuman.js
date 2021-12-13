import Player from '../player/player';

export default function getPlayerHuman(palyernName, points) {
  const playerHuman = new Player(palyernName, points);
  return playerHuman;
}