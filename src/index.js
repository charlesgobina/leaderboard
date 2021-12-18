import './style.css';
import GameManager from './gameman.js';
import { domVars } from './domvar.js';

const gameMan = new GameManager();

gameMan.name = domVars.name;
gameMan.score = domVars.score;

function showResults() {
  const res = gameMan.displayScore();
  res.then((finalResponse) => {
    GameManager.renderer(finalResponse, domVars.wrap);
    domVars.refresh.addEventListener('click', () => {
      GameManager.renderer(finalResponse, domVars.wrap);
      window.location.reload();
    });
  });
}

function submit() {
  domVars.scan.addEventListener('submit', (e) => {
    e.preventDefault();
    gameMan.addScore(gameMan.name.value, gameMan.score.value);
    gameMan.name.value = '';
    gameMan.score.value = '';
    showResults();
  });
}

window.onload = () => {
  showResults();
  submit();
};