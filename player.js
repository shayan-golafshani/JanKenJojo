class Player{
    constructor(name){
        this.name = name;
        this.wins = 0;
    }
    saveWinsToStorage(){
        if(this.name === 'Hero'){
            localStorage.setItem('heroWins', this.wins);
        } else if (this.name === 'Enemy'){
            localStorage.setItem('enemyWins', this.wins);
        }
    }
    retrieveWinsFromStorage(){
        if(this.name === 'Hero'){
            return localStorage.getItem('heroWins');
        } else if (this.name === 'Enemy'){
            return localStorage.getItem('enemyWins');
        }
    }
}