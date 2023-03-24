class Game {
  constructor() {
    this.player1 = { scoreRound: 0, scoreTotal: 0 };
    this.player2 = { scoreRound: 0, scoreTotal: 0 };
    this.dice = 1;

    this.currentPlayer = this.player1;
  }

  rollDice(player) {
    // je tire un nombre entre 1 et 6
    this.dice = Math.ceil(Math.random() * 6);

    if (this.dice === 1) {
      this.bankOut(player);
      return;
    }

    // affection du score
    player.scoreRound += this.dice;
  }

  hold(player) {
    // on stocke le score du joueur
    player.scoreTotal = player.scoreRound;
    player.scoreRound = 0;
    this.switchPlayer();
  }

  switchPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  reset() {
    this.player1 = {scoreRound: 0, scoreTotal: 0 };
    this.player2 = {scoreRound: 0, scoreTotal: 0 };
    this.currentPlayer = this.player1; 
  }

  bankOut(player) {
    console.log("perdu");
    player.scoreRound = 0;
    this.switchPlayer();
  }
}
