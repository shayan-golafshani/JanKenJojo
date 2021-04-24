//querySelectors
var changeGameBtn = document.querySelector('#changeGameBtn');
var classicGame = document.querySelector('.game-one');
var jojoGame = document.querySelector('.game-two');
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
