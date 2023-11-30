// Return type is never
const fail = (message: string) => {
  throw new Error(message);
};

// Return type is never
const sing = () => {
  while (true) {
    console.log("Row 1");
    console.log("Row 2");
    console.log("Row 3");
    console.log("Row 4");
    console.log("Row 5");
  }
};

let example: never = 123; // error, need never type

type Square3 = {
  kind: "square";
  size: number;
};

type Rectange3 = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape3 = Square3 | Rectange3 | Circle3;

// starting from this:
// function area(shape: Shape3) {
//   const _ensureAllCasesAreHandled: never = s;
// }

function area(shape: Shape3) {
  if (shape.kind === "square") {
    return shape.size ** 2;
  } else if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  }

  const _ensureAllCasesAreHandled: never = shape;
}
// and if we and circle we will see error until implementing it in the area function

type Circle3 = {
  kind: "circle";
  radius: number;
};

function area2(shape: Shape3) {
  if (shape.kind === "square") {
    return shape.size ** 2;
  } else if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  } else if (shape.kind === "circle") {
    return shape.radius ** 2 * Math.PI;
  }

  const _ensureAllCasesAreHandled: never = shape;
  return _ensureAllCasesAreHandled;
}

const result = area2({ kind: "square", size: 10 });
