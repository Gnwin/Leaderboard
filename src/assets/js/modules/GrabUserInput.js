import fetchdata from './fetchdata';
import api from './Api';
import Newgame from './Newgame';

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
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
    });

  }

  refresh = (e, id) => {
    e.preventDefault();
    fetchdata(id);
  }
}

const grabinput = new GrabUserInput();
export default grabinput

