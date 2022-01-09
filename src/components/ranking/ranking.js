import './ranking.css';
import { setRank } from '../../services/rank/rank';

const getRankingTable = (gameMode) => {
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

  let playersRankingData = setRank();

  if (playersRankingData[gameMode].length === 0) {
    const fakeRanking = [
      {
        playerName: 'That can be you',
        score: 20,
        questions: 20
      }
    ];
    fakeRanking.forEach((player, index) => {
      const markup = `
    <tr> 
      <td class="content_body-row"> ${index + 1}${
        index + 1 === 1 ? 'st' : 'nd'
      } </td>
      <td class="content_body-row"> ${player.playerName} </td>
      <td class="content_body-row content_body-row--last"> ${player.score} / ${
        player.questions
      } </td>
    </tr>`;
      rankingTableContent.insertAdjacentHTML('beforeend', markup);
    });
    localStorage.setItem(
      'rank',
      JSON.stringify({
        people: [],
        vehicles: [],
        starships: []
      })
    );
  } else {
    playersRankingData[gameMode].forEach((player, index) => {
      const markup = `
    <tr> 
      <td class="content_body-row"> ${index + 1}${
        index + 1 === 1 ? 'st' : 'nd'
      } </td>
      <td class="content_body-row"> ${player.playerName} </td>
      <td class="content_body-row content_body-row--last"> ${player.score} / ${
        player.questions
      } </td>
    </tr>`;
      rankingTableContent.insertAdjacentHTML('beforeend', markup);
    });

    return rankingTableContent;
  }

  return rankingTableContent;
};

export const getRanking = (gameMode) => {
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
  const ranking = getRankingTable(gameMode);
  rankingWrapper.appendChild(ranking);

  return rankingWrapper;
};
