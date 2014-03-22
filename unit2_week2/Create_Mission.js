// I worked by myself on this challenge
 
// Your mission description:
// Attack the orcs while cloaked to win the battle!
// 
 
// Pseudocode
// 
// Declare Rogue/Player object

//create Cloak Function to change his stats and win the battle

//create an UnCloak function for fun

 //make some enemys

//declare a function for attacking

//declare a function for orc-attacking that changes the likelihood of damage based on players' visibility

// Initial Code

var player = {
	id:"rogue", spriteName: "RogueV", 
	health: 10, speed: 10, range: 12, x: 10, y:10,
	attack: 3, team: "humans", visible:true
}

 function cloak() {
 	delete player.speed
 	delete player.range
 	delete player.attack
 	delete player.visible
 	delete player.spriteName 
 	player.speed = 3
 	player.range = 4
 	player.attack = 10
 	player.visible = false
 	player.spriteName = "RogueS"
 	console.log("Can't touch this")
 }

 function unCloak() {
 	delete player.speed
 	delete player.range
 	delete player.attack
 	delete player.visible
 	player.speed = 10
 	player.range = 2
 	player.attack = 3
 	player.visible = true
 }

orc1 ={
	id:"orc1", spriteName: "Orc",
	health:12, attack:10, speed:3, range:4,
	x:30, y:10, team:"orcs"
}

orc2 ={
	id:"orc2", spriteName: "Orc",
	health:12, attack:10, speed:3, range:4,
	x:100, y:20, team:"orcs"
}

orc3 ={
	id:"orc3", spriteName: "Orc", 
	health:12, attack:10, speed:3, range:4,
	x:12, y:13, team:"orcs"
}

function attackEnemy(orcNum) {
	if (Math.abs(player.x-orcNum.x) <= player.range && Math.abs(player.y-orcNum.y) <= player.range) 

		{orcNum.health=orcNum.health-player.attack}

	else
		{console.log("You are too far away")}

}


function orcSight (orcNum)
{var random = Math.random()

	if (player.visible && random<0.8)
		{player.health=player.health-orcNum.attack
			console.log("Orc got you")}
	else if(player.visible && random >= 0.8)
			{console.log("Bae caught orc sleeping")}
	else if (player.visible==false && random <0.1)
			{player.health=player.health-orcNum.attack
				console.log("I see right through you")}
	else
			console.log("Who's there?")
}

function inRange(orcNum){
if (Math.abs(player.x-orcNum.x) <= player.range && Math.abs(player.y-orcNum.y) <= player.range) {
	orcSight(orcNum)}
else 
	console.log(orcNum+" is too far away")
}

var orcs = [orc1, orc2, orc3]

function attackPlayer() {

for (var i = 0; i < orcs.length; i++){
	inRange(orcs[i])
	if (player.health <= 0)
		{console.log("You died")}}
}


// Refactored Code


var player = {
	id:"rogue", spriteName: "RogueV", 
	health: 10, speed: 10, range: 12, x: 10, y:10,
	attack: 3, team: "humans", visible:true
}

  function Cloak() {
 	player.speed = 3
 	player.range = 4
 	player.attack = 10
 	player.visible = false
 	player.spriteName = "RogueS"
 }

 function UnCloak() {
 	player.speed = 10
 	player.range = 2
 	player.attack = 3
 	player.visible = true
 
}

orc1 ={
	id:"orc1", spriteName: "Orc",
	health:12, attack:10, speed:3, range:4,
	x:30, y:10, team:"orcs"
}

orc2 ={
	id:"orc2", spriteName: "Orc",
	health:12, attack:10, speed:3, range:4,
	x:100, y:20, team:"orcs"
}

orc3 ={
	id:"orc3", spriteName: "Orc", 
	health:12, attack:10, speed:3, range:4,
	x:12, y:13, team:"orcs"
}

function attackEnemy(orcNum) {
	if (Math.abs(player.x-orcNum.x) <= player.range && Math.abs(player.y-orcNum.y) <= player.range) 

		orcNum.health=orcNum.health-player.attack

	else
		console.log("You are too far away")
}

function orcSight (orcNum)
{var random = Math.random()

	if (player.visible && random<0.8)
		{player.health=player.health-orcNum.attack
			console.log("Orc got you")}
	else if(player.visible && random >= 0.8)
			{console.log("Bae caught orc sleeping")}
	else if (player.visible==false && random <0.1)
			{player.health=player.health-orcNum.attack
				console.log("I see right through you")}
	else
			console.log("Who's there?")
}

function inRange(orcNum){
if (Math.abs(player.x-orcNum.x) <= orcNum.range && Math.abs(player.y-orcNum.y) <= orcNum.range) {
	orcSight(orcNum)}
else
	console.log(orcNum+" is too far away")
}

var orcs = [orc1, orc2, orc3]

function attackPlayer() {

for (var i = 0; i < orcs.length; i++){
	inRange(orcs[i])
	if (player.health <= 0)
		{console.log("You died")}}
}

// Reflection
/*
What parts of your strategy worked? What problems did you face?
I really liked pseudo-coding in a really high level by just writing a sentence about what I wanted to do, then trying to do it with code, and then moving on. I feel like once it gets more complex it will be hard to make this strategy work but for this challenge it worked well. 
What questions did you have while coding? What resources did you find to help you answer them?
I had some trouble drying out my code. I Tried setting all the orcs equal to each other but then when I tried to give each object an individual property it would change the other orcs too and I couldn't figure it out. 
What concepts are you having trouble with, or did you just figure something out? If so, what?
I'm definitely feeling better about functions, if/else statements, and for loops
Did you learn any new skills or tricks?
If/else and for loops are being solidified.
How confident are you with each of the learning objectives?
Pretty confident, though I kind of got carried away with how cool it was that I was making a text based game and forgot about combining the CSS and HTML with Javascript
Which parts of the challenge did you enjoy?
I really loved how open ended this challenge was. It allowed me to find a state of flow where the difficulty of what I was doing matched my skill level and everything sort of melted away. 
Which parts of the challenge did you find tedious?
At first, I was overwhelmed by the possibilities, but once I gave myself a specific challenge everything fell into place. 
*/ 	