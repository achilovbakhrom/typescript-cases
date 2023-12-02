type Person = {
  name: string;
  dateOfBirth?: Date;
};

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function assertDate(value: unknown): asserts value is Date {
  if (value instanceof Date) {
    return;
  } else throw new Error("Value is not a Date");
}

function loadPerson(): Person | null {
  return null;
}

function isDate(value: unknown): value is Date {
  if (value instanceof Date) {
    return true;
  } else {
    throw new Error("Not a date type");
  }
}

const maybePerson = loadPerson();

assert(maybePerson != null, "Could not load person");

console.log("Name: ", maybePerson.name);

if (isDate(maybePerson.dateOfBirth))
  console.log("Date: ", maybePerson.dateOfBirth.toISOString());

assertDate(maybePerson.dateOfBirth);
console.log("Date: ", maybePerson.dateOfBirth.toISOString());
