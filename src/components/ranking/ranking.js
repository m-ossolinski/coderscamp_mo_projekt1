import './ranking.css';
import { Rank } from '../../services/rank/rank';

const getRankingTable = () => {
  const rankingTableContent = document.createElement('table');
  rankingTableContent.classList.add('ranking_content');

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
  rankingTableContent.appendChild(headerRow);

  const contentTableBody = document.createElement('tbody');
  contentTableBody.classList.add('content_body');

  const playerRank = new Rank();

  const playersRankingData = playerRank.getRank('people');

  /* problem playersRankingData is a read only when trying to compare playersRankingData to something, cannot display fake data */

  if (playersRankingData === undefined || playersRankingData === '') {
    playersRankingData = [
      { player: 'That can be you', answers: 20, questions: 20 }
    ];
  }
  playersRankingData.forEach((player, index) => {
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
    rankingTableContent.insertAdjacentHTML('beforeend', markup);
  });

  return rankingTableContent;
};

export const getRanking = (playersRankingData) => {
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
  const ranking = getRankingTable(playersRankingData);
  rankingWrapper.appendChild(ranking);

  return rankingWrapper;
};
