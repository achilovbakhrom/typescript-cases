function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log("LOG: ", message);
}

function sum(...values) {
  return values.reduce((previous, current) => {
    return previous + current;
  });
}

sum(1, 2); // 3

sum(1, 2, 3); // 6

type Add = (a: number, b: number) => number;

let add2: Add;

add2 = function (a: number, b: number): number {
  return a + b;
};

add2 = (a, b) => a + b;
