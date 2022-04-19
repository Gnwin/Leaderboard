import grabinput from './GrabUserInput.js';

function activateButtons(gameId) {
  const btn = document.querySelector('.submit');
  const refresh = document.querySelector('.refresh');

  const refreshHandler = (id) => (event) => {
    grabinput.refresh(event, id);
  };
  refresh.addEventListener('click', refreshHandler(gameId));

  const createGameHandler = (id) => (event) => {
    grabinput.creategame(event, id);
  };
  btn.addEventListener('click', createGameHandler(gameId));
}

export default activateButtons;