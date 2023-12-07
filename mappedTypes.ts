type Point7 = {
  x: number;
  y: number;
  z: number;
};

type ReadonlyPoint = {
  readonly [Item in "x" | "y" | "z"]: number;
  //or   readonly [Item keyof Point7]: Point[Item];
};

const center: ReadonlyPoint = {
  x: 0,
  y: 0,
  z: 0,
};
center.x = 0; // should error

type Readonly2<T> = {
  readonly [Key in keyof T]: T[Key];
};

const center2: Readonly2<Point7> = {
  x: 0,
  y: 0,
  z: 0,
};

center2.x = 0; // should error
