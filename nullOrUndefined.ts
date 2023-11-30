let notDefined: undefined = undefined;
let notPresent: null = null;

class Point4 {
  x: number;
  y: number;
}

const point4 = new Point4();

point4.x = 0;

console.log(point4.x, point4.y); // 0, undefined

// check variable null or undefined => `value == null`

function someFunction(value: string | null | undefined) {
  if (value == null) {
    return value;
  }
  return `<-- ${value.trim()} -->`;
}

console.log(someFunction(null)); // null
console.log(someFunction(undefined)); // undefined
console.log(someFunction("Hello world ")); // <-- Hello world -->
console.log(someFunction("Hello")); // <-- Hello -->
