class Player{

    //one instance is a computer the other is a player maybe we can base
    //if off a boolean value that's passed into the constructor

    constructor(name){
        //key-value pairs
        this.name = this.name;
        this.token = '🕵🏻' || '🙀';
        this.wins = 0;
        
    }

    /*
    constructor - properties should include: name (ex: 'hannah'), token (ex: '⭐️'), wins (ex: 0)
    saveWinsToStorage
    retrieveWinsFromStorage
    takeTurn
    */

    saveWinsToStorage(){
        localStorage.setItem('wins', this.wins);
    }

    retrieveWinsFromStorage(){
        return localStorage.getItem('wins');
    }

    takeTurn(player){

    }


    // //methods
    // throwHandUser(userClickedImg){

    // }

    // throwHandComputer(){

    // }

    // playClassic(){

    // }

    // playRockPaperScissorsSpock(){

    // }

/* 
Spock beats scissors and rock, but loses to paper and lizard.

Lizard beats Spock and paper, but loses to rock and scissors.

Rock beats scissors and lizard, but loses to paper and Spock.

Paper beats rock and Spock, but loses to scissors and lizard.

Scissors beats paper and lizard, but loses to rock and Spock.
*/


}