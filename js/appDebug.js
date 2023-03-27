//variables contenant les boutons du dom
const eltBtnRollDice = document.getElementById("rolldice"); 
const eltBtnHold = document.getElementById("holdgame");
const eltNewGame = document.getElementById('newgame'); 
const eltImageDice = document.getElementById("dice");
const eltMessage = document.getElementById("message");

const game = new Game(); 
const winscore = 100; //best score (in this case 100 wins) it need to soustract 1

// écouteur des évenments bouton
eltBtnRollDice.addEventListener("click", () => {
  game.rollDice(game.currentPlayer); 
  updateAffichage(); 
}); 

eltBtnHold.addEventListener("click", () => {
  game.hold(game.currentPlayer); 
  updateAffichage(); 
}); 

eltNewGame.addEventListener("click", () => {
  game.reset(); 
  updateAffichage();
}); 

function updateAffichage() {
  // mise à jour de l'image 
  eltImageDice.src = `images/dice${game.dice}.png` ; 

  document.querySelector("#player1 .currentScore").innerHTML = game.player1.scoreRound; 
  document.querySelector("#player2 .currentScore").innerHTML = game.player2.scoreRound; 

  document.querySelector("#player1 .score").innerHTML = game.player1.scoreTotal;
  document.querySelector("#player2 .score").innerHTML = game.player2.scoreTotal; 
  
  if(game.player1.scoreTotal >= winscore){
    eltMessage.innerHTML = "Player 1 Wins";
    eltMessage.classList.add('Wins');
    game.reset();
  }else if (game.player2.scoreTotal >= winscore){
    eltMessage.innerHTML = "Player 2 Wins";
    eltMessage.classList.add('Wins');
    game.reset();
  }


}







