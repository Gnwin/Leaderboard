import gameslist from './Games';
import display from './Displaygames';
import error from './error';


async function getGames(id) {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return data;
}

const fetchdata = async (gameid) => {
  let data = await getGames(gameid);
  gameslist.games = data.result;
  display.gamedata(gameslist.games);
}

export default fetchdata;