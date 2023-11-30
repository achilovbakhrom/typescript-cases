type Point2D = {
  x: number;
  y: number;
};

type Point3D = Point2D & { z: number };

interface IPoint2D {
  x: number;
  y: number;
}

interface IPoint3D extends IPoint2D {
  z: number;
}

const point5: IPoint3D = {
  x: 0,
  y: 0,
  z: 0,
};
