class Wasp {
    constructor(name, currentPoints, loosingPoints) {
        this.name = name;
        this.currentPoints = currentPoints;
        this.loosingPoints = loosingPoints;
        this.isAlive = true;
    }

    hitPoints() {
        this.currentPoints -= this.loosingPoints;
        if (this.currentPoints <= 0) this.isAlive = false;
    }

    createHTML() {
        return `
        <div class="wasp">
            <p>${this.name}</p>
            <p>${this.currentPoints}</p>
        </div>`;
    }
}

class Queen extends Wasp {
    constructor() {
        super("Queen", 90, 7);
    }
}

class Worker extends Wasp {
    constructor() {
        super("Worker", 70, 10);
    }
}

class Drone extends Wasp {
    constructor() {
        super("Drone", 60, 12);
    }
}

class Hive {

    constructor() {
        this.wasps = []
        this.createWasp();
        this.showHive();
    }

    createWasp = () => {
        this.wasps.push(new Queen());
        for (let i = 0; i < 5; i++) {
            this.wasps.push(new Worker());
        }
        for (let i = 0; i < 8; i++) {
            this.wasps.push(new Drone());
        }
    }

    showHive = () => {
        const displayDiv = document.getElementById("wasps-container");
        displayDiv.innerHTML = '';
        this.wasps.forEach(singleWasp => displayDiv.innerHTML += singleWasp.createHTML());
    }

    attack = () => {
        let waspRandomSelection = Math.floor(Math.random() * this.wasps.length);
        let targetWasp = this.wasps[waspRandomSelection];
        targetWasp.hitPoints();
        if (!targetWasp.isAlive) this.wasps.splice(waspRandomSelection, 1);
        this.showHive();
    };
}

const newGame = () => waspsNewSet = new Hive("waspsNewSet");
