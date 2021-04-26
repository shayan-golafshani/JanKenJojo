class Game {
    constructor(gameType){
        this.player = new Player('Hero');
        this.computerEnemy = new Player('Enemy');
        this.gameType = gameType || 'classic';
        this.computerWeapon = game1arr[randomInt(0, 2)];
        this.isDraw = false;
    }

    retrieveWins(){
        var playerWins = this.player.retrieveWinsFromStorage();
        var computerWins = this.computerEnemy.retrieveWinsFromStorage();
        var wins = {
            playerWins : this.playerWins,
            computerWins : this.computerWins 
        };
        return wins;
    }

    storeWins(){
        this.player.saveWinsToStorage();
        this.computerEnemy.saveWinsToStorage();
    }


    findWinner(event){
        this.player.wins = this.player.retrieveWinsFromStorage();
        this.computerEnemy.wins = this.computerEnemy.retrieveWinsFromStorage();

        this.isDraw = false;
        var userMove = event.target.id;
        var computerMove = this.computerWeapon;
        var img1path = getImagePath1(userMove);
        var img2path = getImagePath2(computerMove);
        
        //check which image to display
        function getImagePath1 (userMove){
        if(userMove === "rockFighter"){
            img1path = 'rock';
        } else if (userMove === "paperFighter"){
            img1path = 'paper';
        } else if (userMove === "scissorsFighter"){
            img1path = 'scissors';
        } else if (userMove === "koichiFighter"){
            img1path = 'koichi';
        } else if (userMove === "kiraFighter"){
            img1path = 'kira';
        } else if (userMove === "jotaroFighter"){
            img1path = 'jotaro';
        } else if (userMove === "dioFighter"){
            img1path = 'dio';
        } else if (userMove === "josukeFighter"){
            img1path = 'josuke';
        } else {
        } return img1path;
    }

    function getImagePath2 (computerMove){
        if(computerMove === "Rock"){
            img2path = 'rock';
        } else if (computerMove === "Paper"){
            img2path = 'paper';
        } else if (computerMove === "Scissors"){
            img2path = 'scissors';
        } else if (computerMove === "Koichi"){
            img2path = 'koichi';
        } else if (computerMove === "Kira"){
            img2path = 'kira';
        } else if (computerMove === "Jotaro"){
            img2path = 'jotaro';
        } else if (computerMove === "Dio"){
            img2path = 'dio';
        } else if (computerMove === "Josuke"){
            img2path = 'josuke';
        } else {
        } return img2path;
    }
    //update the area with the user's choices        //update images based on logic
        comparisonArea.innerHTML = `
            <img src="assets/${img1path}.png" alt="userChoice" id=""> 
            <img src="assets/${img2path}.png" alt="compChoice" id=""> 
        `

        if(this.gameType !== 'classic'){
            computerMove = game2arr[randomInt(0,4)];
            img1path = getImagePath1(userMove);
            img2path = getImagePath2(computerMove);
            comparisonArea.innerHTML = `
                <img src="assets/${img1path}-stand.png" alt="userChoice" id=""> 
                <img src="assets/${img2path}-stand.png" alt="compChoice" id=""> 
            `

            if(userMove === "koichiFighter" && computerMove === "Koichi" ||
        userMove === "kiraFighter" && computerMove === "Kira" ||
        userMove === "jotaroFighter" && computerMove === "Jotaro" ||
        userMove === "dioFighter" && computerMove === "Dio" ||
        userMove === "josukeFighter" && computerMove === "Josuke") {
            this.isDraw = true;
            //console.log(`You tied 🙀`);
            return false;
        }

        if(userMove === "koichiFighter" && (computerMove === "Jotaro"||computerMove === "Kira" )||
        userMove === "kiraFighter" && (computerMove === "Jotaro"||computerMove === "Dio" )||
        userMove === "jotaroFighter" && (computerMove === "Josuke"||computerMove === "Dio" )||
        userMove === "dioFighter" && (computerMove === "Josuke"||computerMove === "Koichi" )||
        userMove === "josukeFighter" && (computerMove === "Kira"||computerMove === "Koichi" )) {

                this.player.wins++;
                this.player.saveWinsToStorage();
              //  console.log(`You're a winner`);
                return true;
            } else {
                this.computerEnemy.wins++;
                this.computerEnemy.saveWinsToStorage();
                //console.log(`The enemy beat you`);
                return false;
            }
        }
        //normal game logic
        //check for draw
        if(userMove === "rockFighter" && computerMove === "Rock" ||
        userMove === "paperFighter" && computerMove === "Paper" ||
        userMove === "scissorsFighter" && computerMove === "Scissors"){
            this.isDraw = true;
            //console.log(`You tied 🙀`);
            return false;
        }

        if(userMove === "rockFighter" && computerMove === "Scissors" ||
            userMove === "paperFighter" && computerMove === "Rock" ||
            userMove === "scissorsFighter" && computerMove === "Paper") {
                this.player.wins++;
                this.player.saveWinsToStorage();
              //  console.log(`You're a winner`);
                return true;
            } else {
                this.computerEnemy.wins++;
                this.computerEnemy.saveWinsToStorage();
                //console.log(`The enemy beat you`);
                return false;
            }
    }


    resetGame(){
        var totalWins = this.retrieveWins();
        //debugger;
  setTimeout(function(){
    if(game.gameType === 'classic'){
        hide(comparisonArea);
        hide(selectionTokens);
        hide(outcomeText);
        show(classicFighters);
        //make new game and make sure the wins carry over
        game.computerWeapon = game1arr[randomInt(0, 2)];
    } else {
        hide(comparisonArea);
        hide(selectionTokens);
        hide(outcomeText);
        show(jojoFighters);
        //make new game and make sure the wins carry over
        game.computerWeapon = game2arr[randomInt(0, 4)];
    }
        }, 2000);
    }
}