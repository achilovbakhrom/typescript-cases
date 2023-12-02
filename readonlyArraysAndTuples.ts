// this can mutate array
function reverse1(array: number[]): number[] {
  return array.sort().reverse();
}

// example
const array1 = [1, 2, 3, 4, 5];
reverse1(array1); // [5, 4, 3, 2, 1]

// but array1 mutated, it is [5, 4, 3, 2, 1]

function reverse2(array: readonly number[]): number[] {
  //   return array.sort().reverse(); // this gives error try it out
  //   return [...array].sort().reverse(); // solution 1
  return array.slice().sort().reverse(); // solution 2
}

const array2 = [1, 2, 3, 4, 5];
reverse2(array1); // [5, 4, 3, 2, 1]

// and our array2 is not mutated, [1, 2, 3, 4, 5]

// type aliases
type Neat = readonly number[];
type Long = ReadonlyArray<number>;

// tuples

type Point1 = [number, number];

function move(point: Point1, x: number, y: number) {
  point[0] += x;
  point[1] += y;
  return point;
}

const point: Point1 = [0, 0];
const moved = move(point, 10, 10);

console.log(moved); // [10, 10]
console.log(point); // [10, 10] we can use readonly modifier as well
// like type Point1 = readonly [number, number];
