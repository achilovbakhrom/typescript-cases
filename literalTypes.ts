type CoordinalDirection = "North" | "East" | "South" | "West";

let direction: CoordinalDirection;

direction = "North";
direction = "n0r7h";
direction = "West";

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice() {
  return (Math.floor(Math.random() * 6) + 1) as DiceValue;
}

if (rollDice() === 7) {
  throw new Error("Not possible");
}
