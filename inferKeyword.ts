type UnboxArray<T> = T extends Array<infer Member> ? Member : T;

type UnboxedStringArray = UnboxArray<string[]>; // string
type UnboxedNumberArray = UnboxArray<number[]>; // number
type AnythingElse = UnboxArray<string>; // string

type ReturnType2<T> = T extends (...args: any) => infer R ? R : never;

const createPerson = (firstName: string, lastName: string) => ({
  firstName,
  lastName,
  fullName: `${firstName} ${lastName}`,
});

function logPerson(person: ReturnType2<typeof createPerson>) {
  console.log("Person", person.firstName, person.lastName, person.fullName);
}
