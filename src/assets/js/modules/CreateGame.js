import api from './Api.js';
import Game from './Game.js';

const gamename = 'My cool new game';
const game = new Game(gamename);

function createGame() {
  return fetch(api, {
    method: 'POST',
    body: JSON.stringify(game),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => {
    const splittedResult = json.result.split(' ');
    const [id] = [splittedResult[3]];
    const scores = document.querySelector('.scores');
    scores.setAttribute('id', id);
    return id;
  });
}

export default createGame;