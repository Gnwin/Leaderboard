import '../stylesheets/reset.css';
import '../stylesheets/style.css';
// import Newgame from './modules/Newgame';
import gameslist from './modules/Games';
import display from './modules/Displaygames'
// import Icon from './images/icon.png';


async function getGames() {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return data;
}

document.addEventListener('DOMContentLoaded', async () =>{
  let data = await getGames();
  // const result = data[0];
  // console.log(result);
  data.result.splice(20, 2031);
  gameslist.games = data.result;

  console.log(gameslist.games);
  display.gamedata(gameslist.games);

})

// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/')
// .then(res => res.json())
// .then(data => {
  // console.log(JSON.parse(data.result));
  // data = JSON.parse(data.result);
  // console.log(Object.values(data));
  // for (let i=0; i<data.length; i++) {
  //   let post = data[i];
  //   let img = document.createElement('img');
  //   img.src = post.parsely.meta.image.url;
  //   posts.appendChild(img);
  //   console.log(post.parsely.meta.image.url);
  // }
// })

// const b = JSON.parse(localStorage.getItem('todos'))

// export default gameslist.games;



