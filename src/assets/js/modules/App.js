import api from './Api.js';
import Game from './Game.js';
import key from './key.js';
import activateButtons from './ActivateButtons.js';
import fetchAndDisplaydata from './fetchAndDisplaydata.js';

const gamename = 'My cool new game';
const game = new Game(gamename);

const runApp = () => {
  function createID() {
    return fetch(api, {
      method: 'POST',
      body: JSON.stringify(game),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem(key, JSON.stringify({ name: gamename }));
        const leaderBoard = JSON.parse(localStorage.getItem(key));
        const splittedResult = json.result.split(' ');
        const [id] = [splittedResult[3]];
        leaderBoard.id = id;
        localStorage.setItem(key, JSON.stringify(leaderBoard));
        const scores = document.querySelector('.scores');
        scores.setAttribute('id', id);
        return id;
      });
  }
  if (localStorage.getItem(key) === null) {
    createID().then((uniqueid) => {
      fetchAndDisplaydata(uniqueid);
      activateButtons(uniqueid);
    });
  } else {
    const leaderBoard = JSON.parse(localStorage.getItem(key));
    fetchAndDisplaydata(leaderBoard.id);
    activateButtons(leaderBoard.id);
  }
};

export default runApp;