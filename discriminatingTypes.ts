type Circle2 = {
  kind: "circle";
  radius: number;
};

type Square2 = {
  kind: "square";
  size: number;
};

type Rectange2 = {
  kind: "rectange";
  width: number;
  height: number;
};

type Shape2 = Square2 | Rectange2 | Circle2;

function area(shape: Shape2) {
  if (shape.kind === "square") {
    return shape.size ** 2;
  }
  if (shape.kind === "rectange") {
    return shape.width * shape.height;
  }

  if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  }
}

type ValidationSuccess = {
  isValid: true;
  validatedValue: string;
};

type ValidationError = {
  isValid: false;
  errorReason: string;
};

type ValidationResult = ValidationSuccess | ValidationError;

function logResult(result: ValidationResult) {
  if (result.isValid) {
    console.log("Success, validated value: ", result.validatedValue);
  } else {
    console.log("Error, error reason: ", result.errorReason);
  }
}
