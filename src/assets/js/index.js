import '../stylesheets/reset.css';
import '../stylesheets/style.css';

import gameslist from './modules/Games.js';
import load from './modules/loader.js';
import runApp from './modules/App.js';

if (gameslist.games.length === 0) {
  const scorelist = document.querySelector('.scores');
  scorelist.innerHTML = load;
}

runApp();