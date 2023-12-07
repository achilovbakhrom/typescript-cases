type PersonResponse = {
  info: {
    firstName: string;
    lastName: string;
    age: number;
  };
  graduation: {
    year: number;
    nameOfUniversity: string;
    department: string;
  };
  driverLicense: {
    takenYear: number;
    expireYear: number;
  };
  family: {
    children: {
      firstName: string;
      lastName: string;
      gender: "male" | "famale";
    }[];
  };
};

type ChildrenType = PersonResponse["family"]["children"][0];

function getGraduation(arg: PersonResponse): PersonResponse["graduation"] {
  return arg.graduation;
}

function ensureNotUndefined(
  arg?: PersonResponse
): asserts arg is PersonResponse {
  if (arg) {
    return;
  }
  throw new Error("Argument is null or undefined");
}

let person: PersonResponse | undefined;

ensureNotUndefined(person);

person.driverLicense.expireYear;
