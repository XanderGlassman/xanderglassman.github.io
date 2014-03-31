var player_choice = prompt("would you like rock paper or sissors?")
var player_choice = player_choice.toString()


random = Math.random()

	if (random <= 0.33) 
		{var computer_choice = "rock"}
	else if (random >0.33 && random <= 0.66) 
		{var computer_choice = "sissors"}
	else if (random > 0.66)
		{var computer_choice = "paper"}
	else
		{console.log(error)}


console.log("computer rolls " + random + " it chooses " + computer_choice + ". You chose " + player_choice
)


if (computer_choice == "rock" && player_choice == "rock")
	{console.log("tie")}
else if (computer_choice == "sissors" && player_choice == "sissors")
	{console.log("tie")}
else if (computer_choice == "paper" && player_choice == "paper")
	{console.log("tie")}
else if (computer_choice == "rock" && player_choice == "sissors")
	{console.log("rock wins you lose")}
else if (computer_choice == "rock" && player_choice == "paper")
	{console.log("paper wins you da winnna!")}
else if (computer_choice == "sissors" && player_choice == "paper")
	{console.log("sissors wins you lose")}
else if (computer_choice == "sissors" && player_choice == "rock")
	{console.log("rock wins you da winna!")}
else if (computer_choice == "paper" && player_choice == "rock")
	{console.log("paper wins you da loser!")}
else if (computer_choice == "paper" && player_choice == "sissors")
	{console.log("sissors wins you da winna!")}
else
	{console.log("error")}



