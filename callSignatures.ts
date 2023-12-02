type PointCreator = {
  new (x: number, y: number): { x: number; y: number };
  new (x: number, y: number, z: number): { x: number; y: number; z?: number };
};

const Pointer: PointCreator = class {
  public debugName: string = "PointCreator";
  constructor(public x: number, public y: number, public z?: number) {}
};

type Add = {
  (x: number): number;
  //   (x: number, y: number): number;
  (x: number, y: number, z: number): number;
  debugName?: string;
};

const AddFn: Add = (x: number, y?: number, z?: number) => {
  return x + (y ?? 0) + (z ?? 0);
};

AddFn.debugName = "Add Function";

const valid1 = AddFn(1);
const valid2 = AddFn(1, 2, 3);
const invalid = AddFn(1, 2);
