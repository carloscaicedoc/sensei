// ~~~~~~ Parent Class Ninja ~~~~~~~~ // 

class Ninja {

    // ~~~~~ Ninja Constructor ~~~~~ //
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    // ~~~~~ Ninja methods ~~~~~ //
    sayName() {
        console.log(`My Ninja name is ... ${this.name}`);
    }

    showStats() {
        console.log(`^-^-^ Ninja's Stats ^-^-^`);
        console.log(`Name: ${this.name}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Health: ${this.health}`);
    }

    drinkSake() {
        this.health += 10;
    }

    practiceTaijutsu() {
        this.strength += 12;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;  
        this.wisdom = 100; 
    }
    
    speakWisdom() {
        super.drinkSake();
        console.log(`With focus, perseverance, discipline and a strong wifi connection there is no challenge that a Ninja samurai can not achieve.`)
    }
}

// ***** Test ***** // 
const master = new Sensei("Mr Miyagy");
master.showStats();
master.speakWisdom();
master.showStats();
console.log(master.wisdom);