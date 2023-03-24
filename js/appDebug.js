
const eltBtnRollDice = document.getElementById("rolldice"); 
const eltBtnHold = document.getElementById("holdgame");
const eltNewGame = document.getElementById('newgame'); 
const eltImageDice = document.getElementById("dice"); 

const game = new Game(); 


// écouteur evennement 
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
  // mise a jour de l'image 
  eltImageDice.src = `images/dice${game.dice}.png` ; 

  document.querySelector("#player1 .currentScore").innerHTML = game.player1.scoreRound; 
  document.querySelector("#player2 .currentScore").innerHTML = game.player2.scoreRound; 

  document.querySelector("#player1 .score").innerHTML = game.player1.scoreTotal;
  document.querySelector("#player2 .score").innerHTML = game.player2.scoreTotal; 
  



}







