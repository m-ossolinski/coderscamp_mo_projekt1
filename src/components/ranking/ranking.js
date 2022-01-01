import './ranking.css';

const sortedArr = [
  { player: 'Anna', answers: 20, questions: 30 },
  { player: 'Tomek', answers: 10, questions: 20 },
  { player: 'Zenon', answers: 3, questions: 20 }
];

const getRankingTable = (sortedArr) => {
  const rankingContent = document.createElement('table');
  rankingContent.classList.add('ranking_content');

  const header = document.createElement('thead');
  header.classList.add('ranking_content', 'content_header');

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
      <td class="content_body-row"> ${index + 1}${
      index + 1 === 1 ? 'st' : 'nd'
    } </td>
      <td class="content_body-row"> ${player.player} </td>
      <td class="content_body-row content_body-row--last"> ${
        player.answers
      } / ${player.questions} </td>
    </tr>`;
    rankingContent.insertAdjacentHTML('beforeend', markup);
  });

  return rankingContent;
};

export const getRanking = (sortedArray) => {
  const rankingWrapper = document.createElement('div');
  rankingWrapper.classList.add('ranking');

  const rankingTitle = document.createElement('div');
  rankingTitle.classList.add('ranking_title');

  const rankingTitleIcon = document.createElement('img');
  rankingTitleIcon.src = '../../static/assets/ui/icons/contacts_24px.png';
  rankingTitleIcon.classList.add('ranking_icon');
  rankingTitle.appendChild(rankingTitleIcon);

  const rankingTitleText = document.createElement('span');
  rankingTitleText.classList.add('ranking_text');
  rankingTitleText.innerText = 'Mode Ranking';

  rankingTitle.appendChild(rankingTitleText);

  rankingWrapper.appendChild(rankingTitle);
  const ranking = getRankingTable(sortedArr);
  rankingWrapper.appendChild(ranking);

  return rankingWrapper;
};
