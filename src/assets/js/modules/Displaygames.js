import game from "./gamehtml";
// import Newgame from './modules/Newgame';

// async function getGames() {
//   const response = await fetch(
//     `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/`
//   );
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   return data;
// }

// document.addEventListener('DOMContentLoaded', async () =>{
//   const data = await getGames();
//   // const result = data[0];
//   // console.log(result);
//   gameslist.games = data.result;
//   console.log(gameslist.games);
  

// })

class Displaygames {
  constructor() {

  }

  gamedata = (data) => {
    const scorelist = document.querySelector('.scores');
    let markup = '';
    data.forEach(element => {
      const gameitem = game(element.user, element.score);
      markup += gameitem;
    });
    scorelist.innerHTML = markup;
  }
}

const display = new Displaygames();
export default display;