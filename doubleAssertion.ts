type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };
type Person4 = { email: string; name: string };

let point2d: Point2D = { x: 0, y: 0 };
let point3d: Point3D = { x: 0, y: 0, z: 0 };
let person: Person4 = { email: "john@example.com", name: "John" };

point2d = point3d; // Ok
point3d = point2d; // I don't trust you,

// we will help type assertion
point3d = point2d as Point3D; // Now, Ok I trust you

point3d = person as Point3D; // No, I don't trust you, no common fields here

point3d = person as unknown as Point3D; // Now I trust you because of double type assertion
