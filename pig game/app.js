/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

	var scores,roundScore, activePlayer,dice,temp,gamePlaying;
	reset();
	

//. to remove the dice at initial
	

	document.querySelector('.btn-roll').addEventListener('click',function () {
	
	if(gamePlaying){

		// 1. Random Number
	var dice = Math.floor(Math.random() * 6) + 1;


	// 2. Display The Result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';     // bring back the dice 
	diceDOM.src = 'dice-' + dice + '.png';  //change the image according to dice number
	if(temp == dice == 6){
		scores[activePlayer] = 0;
		nextPlayer();
	}
	if(dice!=1){
		roundScore += dice;
		document.getElementById('score-' + activePlayer).textContent = roundScore;  // update total score
		document.getElementById('current-' + activePlayer).textContent = dice;   // update dice number
		temp = dice;
	}
	else {
		scores[activePlayer] = roundScore - temp;
		nextPlayer();
		}
    }
	

	// 3. Update the roundscore if dice was not a 1
});

document.querySelector('.btn-hold').addEventListener('click',function(){

	scores[activePlayer] = roundScore;

	if(roundScore>=100){
		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
		gamePlaying = false;
	}
	else{
	nextPlayer();
}

});

//  DRY function (Dont Repeat Yourself)

function nextPlayer(){
	roundScore = 0;
	document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); // to remove to shade from inactive player
	activePlayer === 0? activePlayer = 1 : activePlayer = 0;
	document.querySelector('.player-' + activePlayer + '-panel').classList.add('active'); // to add shade to the active player
	roundScore = scores[activePlayer];
}

document.querySelector('.btn-new').addEventListener('click', reset);	


function reset(){
scores = [0,0];
roundScore = 0;
activePlayer = 0;
temp = 0;
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.dice').style.display = 'none'; /* style is a method, display is css property & none is css value */
	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';
	document.querySelector('#name-0').classList.remove('Winner');
	document.querySelector('#name-1').classList.remove('Winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	gamePlaying = true;
//var dice = Math.floor(Math.random() * 6) + 1;

//it's a setter
//document.querySelector('#current-' + activePlayer).textContent = dice;   // # tag for id, textcontent is not HTML
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//it's a getter.... just to read the score
//var x = document.querySelector('#score-1').textContent;
//console.log(x);




}









































