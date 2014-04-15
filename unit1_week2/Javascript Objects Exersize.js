// I paired with myself on this challenge.
 
 
 
 
// Pseudocode
// 
// 
/*

secretNumber = to 7
password = "just open the door"
allowedIn = false
members = array{"John", "x", "x", "Mary"

codeVerifier must be a Regular Expression
  ^matches begining of input
  $ matches end of input
  [abc]matches charicter set
  \S matches a charicter other than white space
  + matches preceding charicter 1 or more times
  {2} matches preceding charicter 2 or more times

so after much review...

/^[abc]\S+k\S{2}y$/

*/


// ________
// 
// 
 
 
// __________________________________________
// Write your code below.
 
var secretNumber = 7
var password = "just open the door"
var allowedIn = false
var members = ["John", "Sam", "Paul", "Mary"]
var codeVerifier = /^[abc]\S+k\S{2}y$/
 
/*

^matches begining of input
$ matches end of input
[abc]matches charicter set
\S matches a charicter other than white space
+ matches preceding charicter 1 or more times
{2} matches preceding charicter 2 or more times

/^[abc]\S+k\S{2}y$/
*/


// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
 
var secretNumber = 7
var password = "just open the door"
var allowedIn = false
var members = ["John", "Sam", "Paul", "Mary"]
var codeVerifier = /^[abc].+k..+y$/

 
 
// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
/*
 I tried to at
// 
// What parts of your strategy worked? What problems did you face?
  I decided to just start with the first variable and work my way down. It worked pretty well but I became anxious when I found something that I couldn’t figure out right away.

What questions did you have while coding? What resources did you find to help you answer them?

I got thrown off for a little while because I didn't understand Regular Expressions. I looked at the Mozilla dev page and then got anxious because it didn't click right away. I spent some time trying other things, and it was only after I calmed down a little and went back to the Mozella page that it clicked.

What concepts are you having trouble with, or did you just figure something out? If so, what?

It took me a little while to get regular expressions and I'm not quite sure how an expression is different than a function but I'm sure I'll figure it out. 

Did you learn any new skills or tricks?

Yep, I learned about regular expressions, solidified my ability to declare variables, and also learned that sometimes it's best to take a few minutes and relax, maybe watch my fish swim around.
How confident are you with each of the learning objectives?
    
    I'm feeling pretty confident now now!

Which parts of the challenge did you enjoy?

I loved the feeling of having the code work after struggling for a bit 

Which parts of the challenge did you find tedious?
Overall I feel like it was a good challenge. I found wrestling with the problem for a while a bit tedious :)
*/ 
 __________________________________________
// Driver Code:  Do not alter code below this line.
 
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}
 
assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)
 
assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)
 
assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)
 
assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)
 
assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)
 
assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)
 
assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)
 
assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)
 
assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)
 
assert(
  codeVerifier instanceof RegExp,
  "The value of codeVerifier should be a regular expression.",
  "10. "
)
 
assert(
  codeVerifier.test("axxkxxy") === true
  && codeVerifier.test("bxxkxxy") === true
  && codeVerifier.test("cxxkxxy") === true
  && codeVerifier.test("cxxkxx") === false
  && codeVerifier.test("xxkxxy") === false
  && codeVerifier.test("wcxxkxxy") === false
  && codeVerifier.test("cxxkxxyw") === false
  && codeVerifier.test("bkaay") === false
  && codeVerifier.test("raakaay") === false
  && codeVerifier.test("aakay") === false
  && codeVerifier.test("wcxxvxxy") === false,
  "The value of codeVerifier should detect whether or not a string begins with an 'a','b', or 'c', followed by at least one of any character, followed by a 'k', followed by two of any character, followed by a 'y' that ends the string.",
  "11. "
)
/*
var codeVerifier = test RegExp() 

if

"test string".indexOf("a") === 0 || "test string".indexOf("b") === 0 || "test string".indexOf("c") === 0

and 

"test string".indexOf("k") >= 2

and

"test string".indexOf("Y") >= 5



else if 

console.log("yesssss")

end


//create a new regular expression, codeVerifier
//if the first letter of the string 


^matches begining of input
$ matches end of input
[abc]matches charicter set

\S matches a charicter other than white space
x|y matches either x or y


[abc]\S|k\S|k\S|k\S|k\S\Sy

so \^[abc]\S+k\S{2,}$y\

*/