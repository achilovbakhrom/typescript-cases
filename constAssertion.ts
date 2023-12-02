const king = "elvis";
king = "john";
const uppercased = king.toUpperCase(); // king === "ELVIS"

const dave1 = {
  name: "dave",
  role: "drummer",
  skills: ["drumming", "headbanging"],
};

dave1.name = "grohl";
dave1.role = "singer";
dave1.skills.unshift("singing");

// and if we assert dave2 as const object becomes to immutable
const dave2 = {
  name: "dave",
  role: "drummer",
  skills: ["drumming", "headbanging"],
} as const;
// now fields are readonly and array is readonlyarray

dave2.name = "grohl";
dave2.role = "singer";
dave2.skills.unshift("singing");

function layout(settings: {
  align: "left" | "center" | "right";
  padding: number;
}) {
  console.log("Performing layout: ", settings);
}

const example1 = {
  align: "left",
  padding: 0,
};

layout(example1); // hovewer align has 'left' value it can be mutated as a regular string

const example2 = {
  align: "left" as const,
  padding: 0,
};

// or
// const example2 = {
//   align: "left",
//   padding: 0,
// } as const;

layout(example2);
