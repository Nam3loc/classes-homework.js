/*
You will be working with this class

class Cat {}

1. give the class at least 3 properties
2. give the class at least 3 methods
3. create two instances of the class (two cats)
4. log both instances to see their properties
5. invoke each method from both instances

Constructors

here is a class to work with

class Pirate {

  constructor(){

  }

}

1. create 3 properties that are set by the constructor
2. create 3 methods
3. instantiate 2 arrays of 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
4. loop over each array and print 3 properties of each pirate
*/

class Cat {
    constructor(nameParam, colorParam, eyesParam) {
        this.name = nameParam
        this.color = colorParam
        this.eyes = eyesParam;
    }
    potty() {
        console.log(`${this.name} is using the bathroom`);
    }
    glower() {
        console.log(`You're walking around your house, turn the corner and see ${this.name} glaring at you angrily.`)
    }
    lickFur() {
        console.log(`${this.name} has already slept, ate, and gone to the bathroom. Time to lick my ${this.color} fur again.`)
    }
}

const garfield = new Cat("Garfield", "orange", "black");
const fluffers = new Cat("Fluffers", "white", "golden");
// console.log(garfield);
// console.log(fluffers);
// garfield.potty();
// garfield.glower();
// garfield.lickFur();
// fluffers.potty();
// fluffers.glower();
// fluffers.lickFur();

//=============================================================\\

class Pirate {

    constructor(name, colorBeard, eyePatch = true, parrot = true) {
        this.name = name;
        this.colorBeard = colorBeard;
        this.eyePatch = eyePatch;
        this.parrot = parrot;
    }
    greeting(otherPerson) {
        console.log(`Ah yes, ${otherPerson}, salute your captain.`)
    }
    compliment() {
        console.log("You're almost as sharp as meself.")
    }
    drink(otherPerson) {
        console.log(`Will you fetch me some newly brewed sea water, ${otherPerson}`)
    }
}

const pirate1 = new Pirate('Patchy', 'black beard');
const pirate2 = new Pirate('Scratchy', 'red beard', 'true', 'false');
const pirate3 = new Pirate('Ari', 'white beard', 'false');
const pirate4 = new Pirate('Captain', 'salt and pepper beard');
const pirate5 = new Pirate('Rat Scallion', 'no beard', 'false', 'false')
const pirate6 = new Pirate('Jack Sparrow', 'black beard', 'false')

const jollyRoger = [pirate1, pirate2, pirate3];
const blackPearl = [pirate4, pirate5, pirate6];

for (let i = 0; i < jollyRoger.length; i++){
    console.log(jollyRoger[i]);
}

for (let i = 0; i < blackPearl.length; i++){
    console.log(blackPearl[i]);
}