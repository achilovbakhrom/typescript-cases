const strs = {
  hello: "world",
};

console.log(strs["hello"]); // 'world'

const nums = {
  1337: "leet",
};

console.log(nums[1337]); // 'leet'

type Dictionary = {
  [key: string]: boolean;
};

type Person3 = {
  displayName: string;
  email: string;
};

type PersonDictionary = {
  [username: string]: Person3;
  jane: Person3;
};

// if we create object without property name 'jane', will take an error
const persons: PersonDictionary = {
  jane: {
    displayName: "Jane Doe",
    email: "jane@example.com",
  },
};

persons["john"] = { displayName: "John Doe", email: "john@example.com" };
