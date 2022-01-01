const sortedArr = [
  { player: Anna, answers: 20, questions: 30 },
  { player: Tomek, answers: 10, questions: 20 },
  { player: Zenon, answers: 3, questions: 20 }
];

const getRankingTable = (sortedArr) => {
  const rankingContent = document.createElement('table');
  rankingContent.classList.add('ranking_content');

  const header = document.createElement('thead');
  header.classList.add('ranking_content content_header');

  const headerRow = document.createElement('tr');
  headerRow.classList.add('content_header-row');

  const columnNames = ['Place', 'Player', 'Answered'];
  columnNames.forEach((name) => {
    const th = document.createElement('th');
    th.innerText = `${name}`;
    headerRow.appendChild(th);
  });

  header.appendChild(headerRow);
  rankingContent.appendChild(headerRow);

  const contentTableBody = document.createElement('tbody');
  contentTableBody.classList.add('content_body');

  sortedArr.forEach((player, index) => {
    const markup = `
    <tr> 
      <td class="content_body-row"> ${index}${index === 1 ? 'st' : 'nd'} </td>
      <td class="content_body-row"> ${player.player} </td>
      <td class="content_body-row"> ${player.answers} / ${
      player.questions
    } </td>
    </tr>`;
    rankingContent.insertAdjacentHTML('beforeend', markup);
  });
};

export const ranking = (sortedArray) => {
  const rankingWrapper = document.createElement('div');
  rankingWrapper.classList.add('.ranking');

  const rankingTitle = document.createElement('h3');
  rankingTitle.classList.add('ranking_title');

  rankingWrapper.appendChild(rankingTitle);
  rankingWrapper.appendChild(getRankingTable(sortedArr));

  return rankingWrapper;
};
