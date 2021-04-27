class Game {
  constructor(gameType) {
    this.player = new Player("Hero");
    this.computerEnemy = new Player("Enemy");
    this.gameType = gameType || "classic";
    this.computerWeapon = "";
    this.isDraw = false;
  }

  retrieveWins() {
    this.player.wins = this.player.retrieveWinsFromStorage();
    this.computerEnemy.wins = this.computerEnemy.retrieveWinsFromStorage();
  }

  findWinner(event) {
    this.isDraw = false;
    this.retrieveWins();

    var userMove = event.target.id;
    var computerMove = this.computerWeapon;

    if (this.gameType !== "classic") {
      return this.checkJojoGame(userMove, computerMove);
    } else {
      return this.checkBasicGame(userMove, computerMove);
    }
  }

  checkJojoGame(userMove, computerMove) {
    if (userMove === computerMove) {
      this.isDraw = true;
      return;
    } else if (
      (userMove === "koichi" && (computerMove === "jotaro" || computerMove === "kira")) ||
      (userMove === "kira" && (computerMove === "jotaro" || computerMove === "dio")) ||
      (userMove === "jotaro" && (computerMove === "josuke" || computerMove === "dio")) ||
      (userMove === "dio" && (computerMove === "josuke" || computerMove === "koichi")) ||
      (userMove === "josuke" && (computerMove === "kira" || computerMove === "koichi"))
    ) {
      return this.win();
    } else {
      return this.lose();
    }
  }

  checkBasicGame(userMove, computerMove) {
    if (userMove === computerMove) {
      this.isDraw = true;
      return;
    } else if (
      (userMove === "rock" && computerMove === "scissors") ||
      (userMove === "paper" && computerMove === "rock") ||
      (userMove === "scissors" && computerMove === "paper")
    ) {
      return this.win();
    } else {
      return this.lose();
    }
  }

  win() {
    this.player.wins++;
    this.player.saveWinsToStorage();
    return true;
  }

  lose() {
    this.computerEnemy.wins++;
    this.computerEnemy.saveWinsToStorage();
    return false;
  }

  resetGame() {
    setTimeout(stageFight, 1000);
  }
}