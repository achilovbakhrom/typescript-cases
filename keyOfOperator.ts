type Person5 = {
  firstName: string;
  lastName: string;
  location: string;
};

const john: Person5 = {
  firstName: "John",
  lastName: "Doe",
  location: "Melbourne",
};

function logGet(obj: any, key: string) {
  const value = obj[key];
  console.log("Getting: ", key, value);
  return value;
}

const age = logGet(john, "age");
console.log(logGet(john, "email")); // which is not correct

function logGet2(obj: Person5, key: keyof Person5) {
  const value = obj[key];
  console.log("Getting: ", key, value);
  return value;
}

console.log(logGet2(john, "firstName"));
console.log(logGet2(john, "email")); // highlights that the key is not key of Person5 type

type PersonKey = keyof Person5;

// More generically

function logGet3<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  const value = obj[key];
  console.log("Getting: ", key, value);
  return value;
}

console.log(logGet3(john, "firstName"));
console.log(logGet3(john, "email"));

function logSet<Obj, Key extends keyof Obj>(
  obj: Obj,
  key: Key,
  value: Obj[Key]
) {
  console.log("Setting: ", obj, key, value);
  obj[key] = value;
}
