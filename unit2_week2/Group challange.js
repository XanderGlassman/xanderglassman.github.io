// As a user, I want to be able to add a list of numbers together to get their sum.


var array = [2, 3, 3, 5]

var runningSum = 0

for(var i = 0; i < array.length; i++){
	 	var runningSum = runningSum + array[i]  
}

console.log(runningSum)
cl

// As a user, I want to be able to find the mean of a list of numbers.

var array = [2, 3, 3, 5]

var runningSum = 0

for(var i = 0; i < array.length; i++){
	 	var runningSum = runningSum + array[i]  
}

var average = runningSum/array.length

console.log(average)

// As a user, I want to be able to find the median of a list of numbers.

var array = [2, 4, 2, 5]
var array = array.sort()


function isEven (number){
	if (number % 2 == 0)
		{return true}
	else if (number % 2 !==0) 
		{return false}
	else
		{console.log ("error with isEven")}
} 

if (isEven(array.length))
	{var median = ((array[array.length/2-1])+(array[array.length/2]))/2}
	
else 
	{var median = array[array.length/2 - .5]}

console.log(median)

