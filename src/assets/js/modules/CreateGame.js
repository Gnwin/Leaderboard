import api from "./Api";
import Game from "./Game";

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
    let id;
    const splittedResult = json.result.split(' ');
    id = splittedResult[3];
    const scores = document.querySelector('.scores');
    scores.setAttribute("id", id);
    return id;
  })

}

export default createGame;