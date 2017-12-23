var btnRock=document.getElementById('rock');
var btnPaper=document.getElementById('paper');
var btnScissors=document.getElementById('scissors');

var playerCurrentResult=document.getElementById('current-result1');
var computerCurrentResult=document.getElementById('current-result2');
var draws=document.getElementById('draws');
var winner=document.getElementById('winner');

let computerCount=0;
let playerCount=0;
let drawsCount=0;
let logCount=1;
btnRock.addEventListener('click',()=>{
	if(playerCount<5&&computerCount<5){
		playRound('rock');
	}
	else{
		announceWinner();
	}
});
btnPaper.addEventListener('click',()=>{
	if(playerCount<5&&computerCount<5){
		playRound('paper');
	}
	else{
		announceWinner();
	}
});
btnScissors.addEventListener('click',()=>{
	if(playerCount<5&&computerCount<5){
		playRound('scissors');
	}
	else{		
		announceWinner();
	}
});
function announceWinner(){
	if(playerCount==computerCount){
		winner.textContent="DRAW";
	}
	else if(playerCount<computerCount){
		winner.textContent="COMPUTER";
	}
	else{
		winner.textContent="YOU";
	}
}
function clearData(){
	computerCount=0;
	playerCount=0;
	drawsCount=0;
	logCount=1;
	playerCurrentResult.textContent=0;
	computerCurrentResult.textContent=0;
	draws.textContent=0;
	winner.textContent="";
}
function computerPlay(){
	var choice=["rock","paper","scissors"];
	var result=Math.floor(Math.random()*choice.length);
	return choice[result];
}

function playRound(playerChoice){
	var computerChoice=computerPlay();
	if(playerChoice==computerChoice){
		drawsCount++;
		draws.textContent=drawsCount;
	}
	else if(playerChoice=='rock'){
		if(computerChoice=='paper'){
			computerCount++;
			computerCurrentResult.textContent=computerCount;
		}
		else{
			playerCount++;
			playerCurrentResult.textContent=playerCount;
		}
		
	}
	else if(playerChoice=='paper'){
		if(computerChoice=='rock'){
			playerCount++;
			playerCurrentResult.textContent=playerCount;
		}
		else{
			computerCount++;
			computerCurrentResult.textContent=computerCount;
		}
	}
	else if(playerChoice=='scissors'){
		if(computerChoice=='rock'){
			computerCount++;
			computerCurrentResult.textContent=computerCount;
		}
		else{
			playerCount++;
			playerCurrentResult.textContent=playerCount;
		}
	}
}

