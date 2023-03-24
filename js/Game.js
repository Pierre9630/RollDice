class Game {
  constructor() {
    this.player1 = { scoreRound: 0, scoreTotal: 0 };
    this.player2 = { scoreRound: 0, scoreTotal: 0 };
    this.dice = 1;
    //this.timelimit = 10000;
    /*this.timeLeft = 10000;
    this.idTimer = setInterval(this.ticTac, 1000);
    this.start = new Date();*/

    this.currentPlayer = this.player1;
  }
  /*ticTac(){
    //appeller à chaque seconde
      const actualTime = new Date();
    //si le temps est écoulée
      if((actualTime.getTime() - this.start.getTime()) > this.timeLeft){
        this.hold();
        
      }
    //appel de la fonction

    //reRender le dom (compteur);
  }*/
  rollDice(player) {
    // je tire un nombre entre 1 et 6
    this.dice = Math.ceil(Math.random() * 6);
    // si le dé tombe sur 1 alors remise à zero du round et passe son tour
    if (this.dice === 1) {
      this.bankOut(player);
      return;
    }
    // si le dé tombe sur 6 alors on double la mise (bonus!)
    if (this.dice === 6){

    } 
    // affection du score
    player.scoreRound += this.dice;
  }

  hold(player) {
    // on stocke le score du joueur
    player.scoreTotal += player.scoreRound;
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
  bonusScore(){

  }
}
