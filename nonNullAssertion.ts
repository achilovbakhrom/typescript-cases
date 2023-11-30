type SomeType = {
  field1: number;
  field2: number;
};

let variable: SomeType;

function initialize() {
  variable = { field1: 0, field2: 0 };
}

initialize();

console.log(
  "Non null assertion, you are sure about the variable existance",
  variable!.field1,
  variable!.field2
);

type Person2 = {
  name: string;
  email?: string | null;
};

function sendEmail(email: string) {
  console.log("Sent email to", email);
}

function ensureContactable(person: Person2) {
  if (person.email == null)
    throw new Error(`Person ${person.name} is not contactable`);
}

function contact(person: Person2) {
  ensureContactable(person);
  sendEmail(person.email!); // Ensure for developer correctness of code
}

function contact2(person: Person2) {
  if (person.email == null)
    throw new Error(`Person ${person.name} is not contactable`);
  sendEmail(person.email);
}
