
let roll_dice = document.querySelector('#rolldice');
let hold_game = document.querySelector('#holdgame');
let new_game = document.querySelector('#newgame');
let body = document.querySelector("body");
let currentP1 = document.querySelector(".currentP1");
let currentP2 = document.querySelector(".currentP2");
let totalP1 = document.querySelector(".scoreP1");
let totalP2 = document.querySelector(".scoreP2");

let newgame = false;
let state = false;
let total_score_p1 = 0;
let total_score_p2 = 0;
let round_score = 0;
let actual_player = 1;
document.body.onload = Oninit;
//body.addEventListener("load", Oninit);

function Game(){
    
    function RollDice(){
        let nb_dices = document.getElementsByClassName("newdices").length;
        
        console.log("test");
        
        for (let nb = 0; nb < nb_dices; nb++){
        
        let rolldice = Math.floor(Math.random()*6) +1;
        
        const elements = document.querySelector("img#des" + nb).setAttribute("src", "./images/dice" + rolldice + ".png");
        
        
            if (rolldice === 1){          
                
                round_score = 0;
                Hold();    
                
    
            }else{
                round_score += rolldice;
            }
        }
        return round_score;
    }
    
    function PlayAgain(){
        total_score_p1 = 0;
        total_score_p2 = 0;
        round_score = 0;
        actual_player = 1;
    }
    
    function Hold(){
        /*if(total_score_p1 < 100 || total_score_p2 < 100){

        }*/
        if(actual_player === 1){
            //console.log("p1");
            total_score_p1 += round_score;
            round_score = 0;
            currentP1.textContent = round_score+"";
            totalP1.textContent = total_score_p1+"";
            console.log("deb " + total_score_p1 + "round " + round_score);
        }else{
            //console.log("p2");
            total_score_p2 += round_score;
            round_score = 0;
            currentP2.textContent = round_score+"";
            totalP2.textContent = total_score_p2+"";
        }
        if(state === false){
            state = true;
            console.log(state);
        }else{
            state = false;
        }
        switch(state){
            case true:
                actual_player = 2;            
                break;
            case false:
                actual_player = 1;            
                break;
            
        }
        
        //actual_player.value(actual_player.value() == 1 ? 2 : 1 );
        console.log(actual_player);
    }
    
    roll_dice.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("test button");
        round_score = RollDice();
        //console.log(round_score);
        //console.log(total_score_p1);
        //console.log(total_score_p2);
        console.log(total_score_p1 + " p2 " + total_score_p2);
        if(actual_player === 1){
            currentP1.textContent = round_score +"";
        }else{
            currentP2.textContent = round_score+"";
        }
      });
    
    hold_game.addEventListener('click', (e) => {
        e.preventDefault();
        Hold();
        console.log(round_score);
        console.log(total_score_p1 + " p2 " + total_score_p2);
      });
    
    new_game.addEventListener('click', (e) => {
        e.preventDefault();
        Oninit();
      });
    
}


function Oninit(){
    total_score_p1 = 0;
    total_score_p2 = 0;
    //state = false;
    round_score = 0;
    actual_player = 1;
    //newgame = false;
    let message = document.querySelector(".message");
    message.textContent = "Player 1 Starts";    
    Game();
}
