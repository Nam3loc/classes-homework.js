/*
class Governor {

}

There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.

log the properties and test the methods (don't instantiate)
*/

class Governor {
    static commandNationalGuard(){
        console.log("Go protect our country");
    }

    static appointStateJudges(){
        console.log("Go judge court cases");
    }

    static passNewLegislation(){
        console.log("Here is another law");
    }
}

// Governor.commandNationalGuard();
// Governor.appointStateJudges();
// Governor.passNewLegislation();
// console.log(Governor);

// =============================================================== \\
/*
=== Inheritance ===

Your base class

Person{
    constructor(){

    }
}

1. Think of three properties all people share, set them with the constructor

2. Think of three methods all people share

3. Create a PostalWorker class that inherits from person, add some methods

4. Create a Chef class that inherits from person, add some methods

5. Create 2 PostalWorkers and 2 Chefs, log them and test all their methods
*/


class Person {
    constructor(hair, eyes, diet){
        this.hair = hair;
        this.eyes = eyes;
        this.diet = diet;
    }
    sleep(){
        console.log("I am sleeping");
    }
    eat(){
        console.log("I am eating");
    }
    breathe(){
        console.log("I am breathing");
    }
}

class PostalWorker extends Person {

    deliverMail(){
        console.log("Here is your mail");
    }
    driveToNextHouse(){
        console.log("I am off to the next house");
    }
}

class Chef extends Person {

    cookFood(){
        console.log("I am cooking your food");
    }
    cleanKitchen(){
        console.log("I am cleaning the kitchen before I go home");
    }
    yellAtStaff(){
        console.log("grrrr... do better");
    }
}

const postalMan1 = new PostalWorker("Brown hair", "blue eyes", "carnivore");
    // console.log(postalMan1);
const postalMan2 = new PostalWorker("red hair", "blue eyes", "vegan");
    // console.log(postalMan2);
const chef1 = new Chef("blonde", "blue eyes", "All food");
const chef2 = new Chef("Bald", "brown eyes", "gluten free");
    // console.log(chef2);

// postalMan1.deliverMail();
// postalMan2.driveToNextHouse();

// chef1.cookFood();
// chef2.cleanKitchen();
// chef1.yellAtStaff();

// =============================================================== \\

class BankAccount {
    constructor(){
        this.ownerName = "Bill"
        this.balance = 1000
        this.acctNum = 123456
    }
    deposit(){
        console.log("I am putting money into my account");
    }
    withdraw(){
        console.log("I am taking money from my account");
    }
}

class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, acctNum, overdraftEnabled = ("Overdraft: Access Denied")){
        super(ownerName, balance, acctNum)
        this.overdraftEnabled = overdraftEnabled
    }
    withdraw(){
        console.log(`Can not access funds due to ${this.overdraftEnabled}. Deposit more money to continue.`);
    }
}

let billsChecking = new CheckingAccount();
console.log(billsChecking);
billsChecking.withdraw();


class SavingsAccount extends BankAccount {
    constructor(ownerName, balance, acctNum){
        super(ownerName, balance, acctNum)
    }
    withdraw(){
        console.log("Unable to withdraw");
    }
}

let billsSavings = new SavingsAccount();
console.log(billsSavings);
billsSavings.withdraw();