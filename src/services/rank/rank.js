export const setRank = () => {
  let rank = localStorage.getItem('rank');
  if (rank === null) {
    localStorage.setItem(
      'rank',
      JSON.stringify({
        people: [],
        vehicles: [],
        starships: []
      })
    );
    localStorage.getItem('rank');
    rank = JSON.parse(rank);
    return rank;
  } else {
    rank = JSON.parse(rank);
    return rank;
  }
};

export const saveToRank = (gameMode, player) => {
  let rank = localStorage.getItem('rank');
  rank = JSON.parse(rank);
  rank[gameMode].push(player);
  const sortedRank = rank[gameMode].sort((a, b) => a.score > b.score);
  rank[gameMode] = sortedRank;
  localStorage.setItem('rank', JSON.stringify(rank));
};

export const getRank = (gameMode) => {
  let rank = localStorage.getItem('rank');
  rank = JSON.parse(rank);
  rank = rank[gameMode];
};
