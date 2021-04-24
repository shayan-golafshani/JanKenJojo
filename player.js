class Player{
    constructor(name){
        this.name = this.name;
        this.token = '🙀';
        this.wins = 0;
    }

    saveWinsToStorage(){
        if(this.name === 'Hero'){
            localStorage.setItem('heroWins', this.wins);
        } else if (this.name === 'Enemy'){
            localStorage.setItem('enemyWins', this.wins);
        } else {
            console.log('Error: cant save wins based on playerName.');
        }
    }

    retrieveWinsFromStorage(){
        if(this.name === 'Hero'){
            //localStorage.setItem('heroWins', this.wins);
            return localStorage.getItem('heroWins');
        } else if (this.name === 'Enemy'){
            //localStorage.setItem('enemyWins', this.wins);
            return localStorage.getItem('enemyWins');
        } else {
            console.log('Error: cant retrieve wins based on playerName.');
        }
    }

    takeTurn(player){
        this.name === 'Hero' ? this.token = '🕵🏻' : this.token = '🦹🏼';
        //return something maybe you want to update the score
        //update the gameboard, and reset it so that users can play again
        //maybe you want to update the data model
        //so that I can then manipulate the dom from main.js 
    }

}