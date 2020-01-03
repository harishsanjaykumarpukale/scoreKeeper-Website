var p1Button=document.getElementById("p1");
var p1Score=document.getElementById("p1Score");
var score1=0;

var p2Button=document.getElementById("p2");
var p2Score=document.getElementById("p2Score");
var score2=0;


var isFinish = false;
var winningScore = 5;

var reset = document.getElementById("r");

var n = document.querySelector("input");

var playTo = document.querySelector("p span");

p1Button.addEventListener("click",function(){
	if(!isFinish){
	score1++;
	if (score1===winningScore){
		isFinish=true;
		p1Score.classList.add("winner");
	}

	p1Score.textContent = score1;
	}
})

p2Button.addEventListener("click",function(){
	if(!isFinish){
	score2++;
	
	if (score2===winningScore){
		isFinish=true;
		p2Score.classList.add("winner");
	}
	p2Score.textContent = score2;
	}
})

reset.addEventListener("click",rese);

function rese(){
	score1=0;
	score2=0;
	p1Score.textContent=0;
	p2Score.textContent=0;
	p1Score.classList.remove("winner");
	p2Score.classList.remove("winner");
	isFinish=false;
}

n.addEventListener("change",function(){
	playTo.textContent = this.value;
	winningScore = Number(this.value);
	rese();
})

