import fetchdata from './fetchAndDisplaydata.js';
import api from './Api.js';
import Newgame from './Newgame.js';

class GrabUserInput {
  creategame = (e, id) => {
    e.preventDefault();
    const name = document.querySelector('.yourname');
    const score = document.querySelector('.yourscore');

    if (name.value === '' && score.value === '') {
      return;
    }

    const game = new Newgame(name.value, score.value);
    name.value = '';
    score.value = '';

    fetch(`${api}/${id}/scores`, {
      method: 'POST',
      body: JSON.stringify(game),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json());
  }

  refresh = (e, id) => {
    e.preventDefault();
    fetchdata(id);
  }
}

const grabinput = new GrabUserInput();
export default grabinput;