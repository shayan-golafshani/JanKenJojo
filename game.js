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


    findWinner(){
        //update this isDraw;
        var userMove = this.player.takeTurn();
        var computerMove = this.computerEnemy.takeTurn();
        if(userMove === computerMove){
            this.isDraw = true;
            //do something else here;
        }
        //consider using a switch-statement
        //if()
    }


    resetGame(gameType){
        setTimeout()
        this.retrieveWins();
    }
}
