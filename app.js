/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer;

init();

dice = Math.floor((Math.random() * 6)) + 1;

//DOM Manipulation
document.querySelector('#current-' + activePlayer).textContent = dice; 

//Inner HTML Representation
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//Reading from DOM
var x = document.querySelector('#score-0').textContent;
console.log(x);

//Removing dice image
document.querySelector('.dice').style.display = 'none';

//Set up event handler
function btn()
{
    //do something
    
    //1. Random number
    var dice = Math.floor((Math.random() * 6)) + 1;
    
    //2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.src = 'dice-' + dice + '.png';
    diceDOM.style.display = 'block';
    
    //3. Update the round score if the rolled number was NOT a 1
    if(dice !== 1) {
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
        nextPlayer();
    }
        
}
document.querySelector('.btn-roll').addEventListener('click',btn);

document.querySelector('.btn-hold').addEventListener('click', function () {
    //Add CURRENT score to GLOBAl Score
    scores[activePlayer] += roundScore;
    //Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    if (socres[activePlayer] >= 4) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    }
    
    //Check if the player won
    nextPlayer();
})


function nextPlayer() { 
    //Next Player
        
        activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
}
//Faster way to change elements in a HTML file, by looking it up by element ID
//Set each text to 0


document.querySelector('.btn-new').addEventListener('click', init);

function init() { 
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
   document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
   document.getElementById('name-0').textContent = 'Player 1';
   document.getElementById('name-0').textContent = 'Player 1';



}