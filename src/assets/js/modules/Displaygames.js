import game from './gamehtml.js';
import error from './error.js';

class Displaygames {
  gamedata = (data) => {
    const scorelist = document.querySelector('.scores');
    const message = document.querySelector('.message');
    if (data.length === 0) {
      scorelist.innerHTML = error;
      message.style.display = 'none';
      return;
    }
    message.style.display = 'block';
    let markup = '';
    data.forEach((element) => {
      const gameitem = game(element.user, element.score);
      markup += gameitem;
    });
    scorelist.innerHTML = markup;
  }
}

const display = new Displaygames();
export default display;