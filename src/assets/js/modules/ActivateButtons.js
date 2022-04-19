import grabinput from "./GrabUserInput";

function activateButtons(gameId) {
  const btn = document.querySelector('.submit');
  const refresh = document.querySelector('.refresh');

  const makeHandler1 = (id) => (event) => {
    grabinput.refresh(event, id);
  };
  refresh.addEventListener('click', makeHandler1(gameId));

  const makeHandler = (id) => (event) => {
    grabinput.creategame(event, id);
  };
  btn.addEventListener('click', makeHandler(gameId));
}

export default activateButtons;