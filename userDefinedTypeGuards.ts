type Square = {
  size: number;
};

type Rectange = {
  width: number;
  height: number;
};

type Shape = Square | Rectange;

function isSquare(shape: Shape): shape is Square {
  return "size" in shape;
}

function isRectange(shape: Shape): shape is Rectange {
  return "width" in shape;
}

function area(shape: Shape) {
  if (isSquare(shape)) {
    return shape.size ** 2;
  }
  if (isRectange(shape)) {
    return shape.width * shape.height;
  }
  const _ensure: never = shape;
  return _ensure;
}
