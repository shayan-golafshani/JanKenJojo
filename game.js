// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game

class Game {

    constructor(gameType){
        this.player = new Player('Hero');
        this.computerEnemy = new Player('Enemy');
        this.gameType = this.gameType || 'classic';
        this.computerWeapon = game1arr[randomInt(0, 2)];
        this.isDraw = false;
    }

    //methods
    retrieveWins(){
        var playerWins = this.player.retrieveWinsFromStorage();
        var computerWins = this.computerEnemy.retrieveWinsFromStorage();
    }

    storeWins(){
        this.player.saveWinsToStorage();
        this.computerEnemy.saveWinsToStorage();
    }


    findWinner(event){
        var userMove = event.target.id;
        var computerMove = this.computerWeapon;

        if(this.gameType !== 'classic'){
            computerMove = game2arr[randomInt(0,4)];
            //do jojo logic here
        }
        
        //check for draw
        if(userMove === "rockFighter" && computerMove === "Rock" ||
        userMove === "paperFighter" && computerMove === "Paper" ||
        userMove === "scissorsFighter" && computerMove === "Scissors"){
            this.isDraw = true;
            console.log(`You tied 🙀`);
            return false;
        
        }

        if(userMove === "rockFighter" && computerMove === "Scissors" ||
            userMove === "paperFighter" && computerMove === "Rock" ||
            userMove === "scissorsFighter" && computerMove === "Paper") {
                this.player.wins++;
                this.player.saveWinsToStorage();
                console.log(`You're a winner`);
            } else {
                this.computerEnemy.wins++;
                this.computerEnemy.saveWinsToStorage();
                console.log(`The enemy beat you`);
            }
        //consider using a switch-statement
        //if()
    }


    resetGame(gameType){
        setTimeout()
        this.retrieveWins();
    }
}
