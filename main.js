//querySelectors
var changeGameBtn = document.querySelector('#changeGameBtn');
var classicGame = document.querySelector('.game-one');
var jojoGame = document.querySelector('.game-two');
//fighter-area
var classicFighters = document.querySelector('#classicFighters');
var jojoFighters = document.querySelector('.stand-fighters');
//dom-areas that show data
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

changeGameBtn.addEventListener('click', function(){ location.reload()});

classicGame.addEventListener('click', function(e){
  hide(classicGame);
  hide(jojoGame);
  show(classicFighters);
  instructionsText.innerText = 'Choose your fighter!'
  game = new Game();
  game.computerWeapon = chooseFighters()
});

jojoGame.addEventListener('click', function(e){
  hide(classicGame);
  hide(jojoGame);
  show(jojoFighters);
  instructionsText.innerText = 'Choose your stand fighter!'
  game = new Game('Jojo');
  game.computerWeapon = chooseFighters();
});

classicFighters.addEventListener('click', function(e){
  var clickId = e.target.id;
  clickId === 'rock' || clickId === 'paper' || clickId === 'scissors' ?
  playGame(e) : console.log("Click not registered");
});

jojoFighters.addEventListener('click', function(e){
  var id = e.target.id;
  id === 'dio' || id === 'josuke' || id === 'jotaro' ||
  id === 'kira' || id === 'koichi' ?
  playGame(e) : console.log("Click not registered");
});

function playGame(e){
  var bool = game.gameType === 'classic' ? (hide(classicFighters), bool = true) : (hide(jojoFighters), bool = false);

  var outcomeOfMatch = game.findWinner(e);
  if(outcomeOfMatch) {
    outcomeText.innerText = "Booyah, baby! You won baby! 💪🏼"
    heroWins.innerText = game.player.retrieveWinsFromStorage();  
  } else if(game.isDraw) {
    outcomeText.innerText = "You tied 🙀"  
  } else {
    outcomeText.innerText = "The enemy beat you 💉"
    enemyWins.innerText = game.computerEnemy.retrieveWinsFromStorage();
  }
  show(outcomeText);
  show(changeGameBtn);
  showImg(e, bool);
  var choices = function (){
    show(comparisonArea);
    show(selectionTokens);
    game.resetGame();
  }
  setTimeout(choices, 1000)
}

function showImg (e , bool) {
  var img1path = e.target.id;
  var img2path = game.computerWeapon;
        if(!bool){
          img1path += '-stand';
          img2path += '-stand';
        }
  comparisonArea.innerHTML = `
    <img src="assets/${img1path}.png" alt="userChoice"> 
    <img src="assets/${img2path}.png" alt="compChoice"> `;
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

function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min}
function hide(elem) {elem.classList.add('hidden')}
function show(elem) {elem.classList.remove('hidden')}