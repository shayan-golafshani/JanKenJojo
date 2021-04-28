var changeGameBtn = document.querySelector('#changeGameBtn');
var startOverBtn = document.querySelector('#startOverBtn');
var classicGame = document.querySelector('.game-one');
var jojoGame = document.querySelector('.game-two');

var classicFighters = document.querySelector('#classicFighters');
var jojoFighters = document.querySelector('.stand-fighters');

var instructionsText = document.querySelector('#instructionsText');
var outcomeText = document.getElementById('outcome');
var heroWins = document.getElementById('heroWins');
var enemyWins = document.getElementById('enemyWins');
var comparisonArea = document.getElementById('userComputerComparison');
var selectionTokens = document.querySelector('.show-selection');

var game;

window.onload = function(){
  heroWins.innerText = localStorage.getItem('heroWins') || '0';
  enemyWins.innerText = localStorage.getItem('enemyWins') || '0';
};

changeGameBtn.addEventListener('click', function(){
  location.reload()});

startOverBtn.addEventListener('click', startOverWithThemeMusic);

classicGame.addEventListener('click', function(){
  setupClassicGame(true);
});

jojoGame.addEventListener('click', function(){
  setupClassicGame(false);
});

classicFighters.addEventListener('click', checkValidClickArea);
jojoFighters.addEventListener('click', checkValidClickArea);

function checkValidClickArea(e){
  var clickId = e.target.id;
    clickId === 'rock' || clickId === 'paper' || clickId === 'scissors' ||
    clickId === 'dio' || clickId === 'josuke' || clickId === 'jotaro' ||
    clickId === 'kira' || clickId === 'koichi' ?
    playGame(e) : console.log("Click not registered");  
}

function setupClassicGame(classicGameBool){
  hide(classicGame);
  hide(jojoGame);
  classicGameBool ? (show(classicFighters), instructionsText.innerText = 'Choose your fighter!' , game = new Game()) :
  (show(jojoFighters), instructionsText.innerText = 'Choose your stand fighter!' , game = new Game('Jojo'));
  game.computerWeapon = chooseFighters()
}

function playGame(e){
  var isClassicGame = game.gameType === 'classic' ?
  (hide(classicFighters), bool = true) : (hide(jojoFighters), bool = false);

  var outcomeOfMatch = game.findWinner(e);
  if(outcomeOfMatch) {
    outcomeText.innerText = "Booyah, baby! You won baby! 💪🏼"
    heroWins.innerText = game.player.retrieveWinsFromStorage();
  } else if(game.isDraw) {
    outcomeText.innerText = "You tied 🙀"  
  } else {
    outcomeText.innerText = "The enemy beat you 💉"
    enemyWins.innerText = game.computerEnemy.retrieveWinsFromStorage();
    show(startOverBtn);
  }
  show(outcomeText);
  show(changeGameBtn);
  showImg(e, isClassicGame);
  var displayFighters = function (){
    show(comparisonArea);
    show(selectionTokens);
    game.resetGame();
  }
  setTimeout(displayFighters, 1150)
}

function showImg (e , isClassicGame) {
  var img1path = e.target.id;
  var img2path = game.computerWeapon;
        if(!isClassicGame){
          img1path += '-stand';
          img2path += '-stand';
        }
  comparisonArea.innerHTML = `
    <img src="assets/${img1path}.png" alt="usersChoice"> 
    <img src="assets/${img2path}.png" alt="computerChoice"> `;
}

function chooseFighters(){
  var fighters = ["rock", "paper", "scissors", "dio", "kira", "josuke", "jotaro", "koichi"]
  return game.gameType === 'classic' ? fighters[randomInt(0,2)] : fighters[randomInt(3,7)];
}

function stageFight(){
  prepNextFight()
  game.computerWeapon = chooseFighters();
  (game.gameType === 'classic') ? show(classicFighters): show(jojoFighters);
}

function prepNextFight(){
  hide(comparisonArea);
  hide(selectionTokens);
  hide(outcomeText);
}

function startOverWithThemeMusic (){
  enemyWins.innerHTML = `
<audio autoplay="true">
  <source src="assets/jojo-theme-wave.wav" type="audio/wav">
  <source src="assets/jojo-theme.mp3" type="audio/mpeg">
</audio>`

instructionsText.innerText = "Reloading game, better luck next time...";
  var timeout = function(){
  localStorage.clear();
  location.reload()
  }
  setTimeout(timeout, 10500);
}

function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min}
function hide(elem) {elem.classList.add('hidden')}
function show(elem) {elem.classList.remove('hidden')}