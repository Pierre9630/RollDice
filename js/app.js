let roll_dice = document.querySelector('#rolldice');
let hold_game = document.querySelector('#holdgame');
let new_game = document.querySelector('#newgame');
let body = document.querySelector("body");
let currentP1 = document.querySelector(".currentP1");
let currentP2 = document.querySelector(".currentP2");
let totalP1 = document.querySelector(".scoreP1");
let totalP2 = document.querySelector(".scoreP2");
let message = document.querySelector(".message");
let timerElement = document.querySelector("timer");
document.body.onload = Oninit;

let RollDice;
let P1;
let P2;

class Game{
    activePlayer = 1;
    newgame = false;
    //limitPlayers = 2;
    constructor(){
       
        //this.limitPlayers = limitPlayers;
    }
    /*StartTimer(){
        // program to create a countdown timer

        // time to countdown from (in milliseconds)
        let countDownDate = new Date().getTime() + 30 * 1000;

        // countdown timer
        let x = setInterval(function() {

            // get today's date and time in milliseconds
            let now = new Date().getTime();

            // find the interval between now and the countdown time
            let timeLeft = countDownDate - now;

            // time calculations for days, hours, minutes and seconds
            //const days = Math.floor( timeLeft/(1000*60*60*24) );
            //const hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );
            //const minutes = Math.floor( (timeLeft/1000/60) % 60 );
            const seconds = Math.floor( (timeLeft/1000) % 60 );

            // display the result in the element with id="demo"
            //return seconds;
            //timerElement.textContent = seconds + " secondes ";

            // clearing countdown when complete
            if (timeLeft < 0) {
                clearInterval(x);
                console.log('CountDown Finished');
            }
            }, 1000);
        
    }*/
    Win(){

    }
    Reset(){
        this.activePlayer = 1;
        this.newgame = true;
    }
    ChangePlayer(){
        if(this.activePlayer === 1){
            this.activePlayer = 2
        }else{
            this.activePlayer = 1;
        }
    }
}

class Player{
   totalScore = 0;
   roundScore = 0;     
    constructor(name){
        this.name = name;
        /*this.totalScore = totalScore;
        this.roundScore = roundScore;*/
    }
    GetRound(){
        
        return this.roundScore;
    }
    SetRound(score){
        this.roundScore = score;
    }
    GetTotal(){
        
        return this.totalScore;
    }
    SetTotal(totalScore){
        this.totalScore = totalScore;
    }
    Hold(){
        this.totalScore += this.roundScore;
    }
    ShowName(){

    }
}

class Player1 extends Player{
    constructor(name){
        super(name,0,0);
    }
    RollTheDice(){
        let nb_dices = document.getElementsByClassName("newdices").length;
            
        console.log("test");
            
            for (let nb = 0; nb < nb_dices; nb++){
            
            let rolldice = Math.floor(Math.random()*6) +1;
            
            const elements = document.querySelector("img#des" + nb).setAttribute("src", "./images/dice" + rolldice + ".png");
            
            
                if (rolldice === 1){          
                    
                    
                    RollDice.Hold();   
                    
        
                }else{
                    round_score += rolldice;
                }
            }
        return round_score;
    }
    /*destructor {
        // This function is called when the object is destroyed
       console.log(`${this.name} is destroyed`);
     }*/

}

class Player2 extends Player{
    constructor(name){
        super(name,0,0);
    }
    RollTheDice(){
        let nb_dices = document.getElementsByClassName("newdices").length;
            
        console.log("test");
            
            for (let nb = 0; nb < nb_dices; nb++){
            
            let rolldice = Math.floor(Math.random()*6) +1;
            
            const elements = document.querySelector("img#des" + nb).setAttribute("src", "./images/dice" + rolldice + ".png");
            
            
                if (rolldice === 1){          
                    
                    
                    RollDice.Hold();   
                    
        
                }else{
                    round_score += rolldice;
                }
            }
        return round_score;
    }
}
new_game.addEventListener('click', (e) => {
    e.preventDefault();
    Oninit();
  });

roll_dice.addEventListener('click', (e) => {
    e.preventDefault();
    
    P1 = new Player("P1");
    P2 = new Player("P2");

    console.log(P1.RollTheDice()+"");

    //console.log(RollDice.StartTimer());
    //timerElement.textContent = RollDice.StartTimer();
    //RollDice.StartTimer(); 
    P1.SetRound(2);
    console.log(P1.GetRound() + " " + P1.GetTotal());
    P1.Hold();
    P1.SetRound(5);
    console.log(P1.GetRound() + " " + P1.GetTotal());
  });
hold_game.addEventListener('click', (e) => {
    e.preventDefault();
    RollDice.Hold();
  });

function Oninit(){      
    message.textContent = "Player 1 Starts";
    P1 = null;
    P2 = null;    
    RollDice.Reset();   
    
}
RollDice = new Game();

//RollDice.Start(P1,P2);
//RollDice = new Game();
//P1 = new Player("P1");
//P2 = new Player("P2");

//console.log(RollDice.StartTimer());
//timerElement.textContent = RollDice.StartTimer();
//RollDice.StartTimer(); 
//P1.SetRound(2);

//P1.Hold();
//P1.SetRound(5);
//console.log(P1.GetRound() + " " + P1.GetTotal());
//console.log(RollDice.GetRound());
//P1.ChangePlayer();
//RollDice.clear();


