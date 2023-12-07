function error(message: string): never {
  throw new Error(message);
}

const notAllowed: never = "some string";

const allowed: never = error("this is okay");

const example20: string = error("this is also ok");

type Verbose = string | never;
type Concise = string;

export type NoEmpty<T> = T extends null | undefined ? never : T;

const v1: string | null = null;
const v2: string | null = "somestring";
const v3 = 10;

const v4: NoEmpty<string> = v1;
const v5: NoEmpty<string> = v2;
const v6: NoEmpty<number> = v3;
