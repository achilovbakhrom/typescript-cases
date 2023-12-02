let dice: number;

function rollDice() {
  dice = Math.floor(Math.random() * 6) + 1;
}

rollDice();

console.log("Dice: ", dice!);

rollDice();

console.log("Again Dice: ", dice!);

// instead we can do `let dice!: number`

let dice2!: number;

function rollDice2() {
  dice2 = Math.floor(Math.random() * 6) + 1;
}

rollDice2();

console.log("Dice: ", dice2);

rollDice2();

console.log("Again Dice: ", dice2);

// strict mode gives error
class Point {
  x!: number;
  y!: number;

  constructor() {
    this.moveRandom();
  }

  moveRandom() {
    this.x = Math.random();
    this.y = Math.random();
  }
}
