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

type Response2<T> = {
  isLoading: boolean;
  error?: string;
  data?: T;
};

function ensureHasData<T>(arg: Response2<T>): asserts arg is Response2<T> {
  if (!arg.isLoading && !arg.error) {
    return;
  }
  throw new Error("123");
}

const data1: Response2<Person8> = {
  isLoading: true,
  error: undefined,
  data: undefined,
};
const data2: Response2<Person8> = {
  isLoading: false,
  error: "error",
  data: undefined,
};
const data3: Response2<Person8> = {
  isLoading: false,
  error: undefined,
  data: undefined,
};
const data4: Response2<Person8> = {
  isLoading: false,
  error: undefined,
  data: { firstName: "John", lastName: "Doe" },
};

type Person8 = {
  firstName: string;
  lastName: string;
};

type EnsureConditional<T extends Response2<any>> = T extends {
  isLoading: false;
  error: null;
}
  ? T["data"]
  : null;

const conditional: EnsureConditional<Response2<Person8>> = { isLoading: false, error: null, data: 123};
