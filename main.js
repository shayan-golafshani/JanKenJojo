//querySelectors
var changeGameBtn = document.querySelector('#changeGameBtn');
var classicGame = document.querySelector('.game-one');
var jojoGame = document.querySelector('.game-two');

//fighter query selectors
var classicFighters = document.querySelector('#classicFighters');
var jojoFighters = document.querySelector('.stand-fighters');

var rockFighter = document.querySelector('#rockFighter');
var paperFighter = document.querySelector('#paperFighter');
var scissorsFighter = document.querySelector('#scissorsFighter');

var dioFighter = document.querySelector('#dioFighter');
var josukeFighter = document.querySelector('#josukeFighter');
var jotaroFighter = document.querySelector('#jotaroFighter');
var kiraFighter = document.querySelector('#kiraFighter');
var koichiFighter = document.querySelector('#koichiFighter');

var instructionsText = document.querySelector('#instructionsText');
var outcomeText = document.getElementById('outcome');
var heroWins = document.getElementById('heroWins');
var enemyWins = document.getElementById('enemyWins');
var comparisonArea = document.getElementById('userComputerComparison');
var selectionTokens = document.querySelector('.show-selection');
//add query selectors for all your sets of fighters!

var game1arr = ["Rock", "Paper", "Scissors"];
var game2arr = ["Dio", "Kira", "Josuke", "Jotaro", "Koichi"];

var game;

//Event listeners
changeGameBtn.addEventListener('click', function(e){
    e.preventDefault();
    someFunction();
});

//tested all selectors
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

rockFighter.addEventListener('click', playClassicGame);
paperFighter.addEventListener('click', playClassicGame);
scissorsFighter.addEventListener('click', playClassicGame);

dioFighter.addEventListener('click', playJojoGame);
josukeFighter.addEventListener('click', playJojoGame);
jotaroFighter.addEventListener('click', playJojoGame);
kiraFighter.addEventListener('click', playJojoGame);
koichiFighter.addEventListener('click', playJojoGame);

function playClassicGame(e){
  hide(classicFighters);
  var outcomeOfMatch = game.findWinner(e);
  if(outcomeOfMatch) {
    outcomeText.innerText = "Booyah, baby! You won bitch! 💪🏼"
    heroWins.innerText = game.player.wins;  
  } else if(game.isDraw) {
    outcomeText.innerText = "You tied 🙀"  
  } else {
    outcomeText.innerText = "The enemy beat you 💉"
    enemyWins.innerText = game.computerEnemy.wins;
  }
  show(outcomeText);
  //was working here at 11:54 PM last night
  var choices = function (){
    show(comparisonArea);
    show(selectionTokens);
  }
  setTimeout(choices, 1200)
  //need to save wins to local storage
  //clear board or restart it. 
  //show the change game button babes
}

//duplicate function here clear it up
function playJojoGame(e){
  hide(jojoFighters);
  var outcomeOfMatch = game.findWinner(e);
  if(outcomeOfMatch) {
    outcomeText.innerText = "Booyah, baby! You won bitch! 💪🏼"
    heroWins.innerText = game.player.wins;  
  } else if(game.isDraw) {
    outcomeText.innerText = "You tied 🙀"  
  } else {
    outcomeText.innerText = "The enemy beat you 💉"
    enemyWins.innerText = game.computerEnemy.wins;
  }
  show(outcomeText);
  //was working here at 11:54 PM last night
  var choices = function (){
    show(comparisonArea);
    show(selectionTokens);
  }
  setTimeout(choices, 1200)
  //need to save wins to local storage
  //clear board or restart it. 
  //show the change game button babes
}

function someFunction(){
console.log('Im working!!!!')
}

//add random button generator
//1-3 for normal game, 1-5 for jojo game
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//functions to hide and toggle elements
function toggle(elem) {
    elem.classList.toggle('hidden');
  }
  
  function hide(elem) {
    elem.classList.add('hidden');
  }
  
  function show(elem) {
    elem.classList.remove('hidden');
  }