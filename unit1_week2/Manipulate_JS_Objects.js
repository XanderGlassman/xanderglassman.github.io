// This is a Solo Challenge. 
 
// There is a section below where you will write your code.
// Do not alter this object here.
 
 
var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
 
var adam = {}

2. Give adam a name property with the value "Adam".
 
define adam and make it contain a name property with a value "Adam"

3. Add a spouse property to terah and assign it the value of adam.

terah.spouse = adam
 
4. Change the value of the terah weight property to 125.

terah.weight =125 

5. Remove the eyeColor property from terah.
 
delete property of eye color

delete tarah.eyecolor

6. Add a spouse property to adam and assign it the value of terah.

give adam a spouse property with a value of terah!
adam.spouse = terah
 
7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
 

 terah.children = {} 


8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

  terah, children (prop of terah), carson (prop of terah.children) given a property called name = "Carson"


9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

   terah, children (prop of terah), carter (prop of terah.children) given a property called name = "Carter"

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

     terah, children (prop of terah), colton (prop of terah.children) given a property called name = "Colton"

 
11. Add a children property to adam and assign it the value of terah children.
 

 adam, children (prop of adam)= Terah, children (prop of Terah)
 
*/
 
// __________________________________________
// Write your code below.
 
 var adam = {name:"Adam"}

 adam.spouse=terah

 terah.spouse = adam
 
 terah.weight = 125

 delete terah.eyeColor

 terah.children = {}
 
 terah.children.carson= {name:"Carson"}
 
 terah.children.carter= {name:"Carter"}
 
 terah.children.colton= {name:"Colton"}
 
 adam.children=terah.children
 


// __________________________________________
// Reflection: Use the reflection guidelines
/*
What parts of your strategy worked? What problems did you face?
The challenge was nice a breezy until I ran into my own personal version of inception. It took a little bit of fiddling with the code until I figured it out. 
What questions did you have while coding? What resources did you find to help you answer them?
Checking out the driver code actually helped me a lot, because I didn't know you were allowed to put another property into a property. 
What concepts are you having trouble with, or did you just figure something out? If so, what?
I feel a lot better about manipulating objects but I feel like it will take some time until I feel great. 
Did you learn any new skills or tricks?
I learned a lot about objects!
How confident are you with each of the learning objectives?
Pretty confident.... I'd say like 7/10
Which parts of the challenge did you enjoy?
I kind of liked running into a problem I had to stress about for a bit. 
Which parts of the challenge did you find tedious?
Like I said before, I didn't really love the pseudo-code part of the exercise, it seemed excessive at least for right now. I guess it's good to start the habit early though. 
*/ 
// __________________________________________
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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)
 
assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)
 
assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)
 
assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)
 
assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)
 
assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)
 
assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)
 
assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)
 
assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)
 
assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)
 
assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)
 
console.log("\nHere is your final terah object:")
console.log(terah)