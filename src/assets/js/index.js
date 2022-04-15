import '../stylesheets/reset.css';
import '../stylesheets/style.css';

import gameslist from './modules/Games';
import grabinput from './modules/GrabUserInput';
import fetchdata from './modules/fetchdata';
import load from './modules/loader'
import createGame from './modules/CreateGame';
// import Icon from './images/icon.png';

if (gameslist.games.length === 0) {
  const scorelist = document.querySelector('.scores');
  scorelist.innerHTML = load;
}

createGame().then((uniqueid) => {
  fetchdata(uniqueid);
  const btn = document.querySelector('.submit');
  const refresh = document.querySelector('.refresh');

  const makeHandler1 = (id) => (event) => {
    grabinput.refresh(event, id);
  };
  refresh.addEventListener('click', makeHandler1(uniqueid)); 

  const makeHandler = (id) => (event) => {
    grabinput.creategame(event, id);
  };
  btn.addEventListener('click', makeHandler(uniqueid));
});



