Code Combat Challange

//I worked on this challange by myself//

//Rescue Mission

//move up *2
//move right *2
//move down 
//attack

this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();


//Grab the Mushroom

//move up
//move right
//move left
//move up
//attack!

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

//Drink Me

// move right
//attack
//move right
//move down
//move up
//move right
//Attack! 

this.moveRight ();
this.attackNearbyEnemy();
this.moveRight ();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Taunt the Gaurds
//move right *2
//move up
//move right
//say hello
//move down
//move right
//move up
//move right


this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("hello");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

//It's a Trap

//move down *2
//say "hey"
//move up *2

this.moveDown();
this.moveDown();
this.say("Hey");
this.moveUp();
this.moveUp();


//Taunt

//say "hey" *4

this.say("hey");
this.say("you're a towle");
this.say("hey");
this.say("you're a towle");

//Cowardly Taunt

//move up to a spot near ogers
//say hey
//move back to saftey


// Run your soldier out where the ogres can hear you
this.moveXY (55,32);
// Say something!
this.say("Hey");
// Then run back behind the arrow towers for safety
this.moveXY(69,13);

//Commanding Folowers

// say "follow"
//move close to ogres
//say "attack"

this.say("follow"); 
this.moveXY (58,40);
this.say("attack");

//Mobile Artillery

//move behind rocks
//attack ogres
//attack big ogre's path
//move up to new position behind rocks
//attack ogres
//attack other big ogre's new position 

this.moveXY(85, 36);
this.attackXY(69,53);
this.attackXY(72,42);
this.moveXY(64,51);
this.attackXY(50,64);
this.attackXY(56,61);
this.attackXY(56,60);
