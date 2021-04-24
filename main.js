//querySelectors
var changeGameBtn = document.querySelector('#changeGameBtn');
var classicGame = document.querySelector('.game-one');
var jojoGame = document.querySelector('.game-two');

//fighter query selectors
var rockFighter = document.querySelector('#rockFighter');
var paperFighter = document.querySelector('#paperFighter"');
var scissorsFighter = document.querySelector('#scissorsFighter');

var dioFighter = document.querySelector('#dioFighter');
var josukeFighter = document.querySelector('#josukeFighter');
var jotaroFighter = document.querySelector('#jotaroFighter');
var kiraFighter = document.querySelector('#kiraFighter');
var koichiFighter = document.querySelector('#koichiFighter');
//add query selectors for all your sets of fighters!

//Event listeners
changeGameBtn.addEventListener('click', function(e){
    e.preventDefault();
    someFunction();
});
classicGame.addEventListener('click', someFunction);
jojoGame.addEventListener('click', someFunction);

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