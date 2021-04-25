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
        this.isDraw = false;
        // debugger;
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
            console.log('Error: cant assign img file-path');
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
            console.log('Error: cant assign img file-path');
        } return img2path;
    }
    //update the area with the user's choices
    comparisonArea.innerHTML = `
        <img src="/assets/${img1path}.png" alt="userChoice" id=""> 
        <img src="/assets/${img2path}.png" alt="compChoice" id=""> 
        `

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
                return true;
            } else {
                this.computerEnemy.wins++;
                this.computerEnemy.saveWinsToStorage();
                console.log(`The enemy beat you`);
                return false;
            }
        //consider using a switch-statement
        //if()
    }


    resetGame(gameType){
        setTimeout()
        this.retrieveWins();
    }
}
