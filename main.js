//querySelectors
var changeGameBtn = document.querySelector('#changeGameBtn');
var classicGame = document.querySelector('.game-one');
var jojoGane = document.querySelector('.game-two')

//Event listeners
changeGameBtn.addEventListener('click', function(e){
    e.preventDefault();
    someFunction();
});
classicGame.addEventListener('click', someFunction);
jojoGane.addEventListener('click', someFunction);

function someFunction(){
console.log('Im working!!!!')
}