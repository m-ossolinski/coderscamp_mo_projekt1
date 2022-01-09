export const setRank = () => {
  if (localStorage.getItem('rank') === null) {
    console.log('rank was null');
    localStorage.setItem(
      'rank',
      JSON.stringify({
        people: [],
        vehicles: [],
        starships: []
      })
    );
    const rank = localStorage.getItem('rank');
    const rankParsed = JSON.parse(rank);
    return rankParsed;
  } else {
    console.log('rank parsed');
    const rank = localStorage.getItem('rank');
    const rankParsed = JSON.parse(rank);
    return rankParsed;
  }
};

export const saveToRank = (gameMode, player) => {
  let rank = localStorage.getItem('rank');
  rank = JSON.parse(rank);
  console.log(rank);
  rank[gameMode].push(player);
  const sortedRank = rank[gameMode].sort((a, b) => a.score > b.score);
  rank[gameMode] = sortedRank;
  console.log(sortedRank);
  localStorage.setItem('rank', JSON.stringify(rank));
};

export const getRank = (gameMode) => {
  let rank = localStorage.getItem('rank');
  rank = JSON.parse(rank);
  rank = rank[gameMode];
};
