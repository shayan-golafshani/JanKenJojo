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

var game1arr = ["Rock", "Paper", "Scissors"];
var game2arr = ["Dio", "Kira", "Josuke", "Jotaro", "Koichi"];
var game;

//Event listeners
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
});

jojoGame.addEventListener('click', function(e){
  hide(classicGame);
  hide(jojoGame);
  show(jojoFighters);
  instructionsText.innerText = 'Choose your stand fighter!'
  game = new Game('Jojo');
});

classicFighters.addEventListener('click', function(e){
  var clickId = e.target.id;
  clickId === 'rockFighter' || clickId === 'paperFighter' || clickId === 'scissorsFighter' ?
  playGame(e) : console.log("Click not registered");
});

jojoFighters.addEventListener('click', function(e){
  var id = e.target.id;
  id === 'dioFighter' || id === 'josukeFighter' || id === 'jotaroFighter' ||
  id === 'kiraFighter' || id === 'koichiFighter' ?
  playGame(e) : console.log("Click not registered");
})

function playGame(e){
  game.gameType === 'classic' ? hide(classicFighters) : hide(jojoFighters);
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
  var choices = function (){
    show(comparisonArea);
    show(selectionTokens);
    game.resetGame();
  }
  setTimeout(choices, 1000)
}

function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min}
function hide(elem) {elem.classList.add('hidden')}
function show(elem) {elem.classList.remove('hidden')}