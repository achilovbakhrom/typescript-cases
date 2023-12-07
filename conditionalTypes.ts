type IsNumber<T> = T extends number ? "number" : "other";

type WithNumber = IsNumber<number>;
type WithOther = IsNumber<string>;

type WithUsername = { username: string };

type IsAge<T> = T extends WithUsername ? number : never;

type Login = {
  username: string;
  password: string;
};

type Car = {
  name: string;
};

type WithCar = IsAge<Car>;
type WithLogin = IsAge<Login>;

const car: WithCar = 123; // because car now has never type
const login: WithLogin = 123; // login is number type because Login type has username field

// usecase
type TypeName<T> = 
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends symbol ? "symbol" :
    T extends Function ? "function" :
    T extends null ? "null" :
    "object";

function getTypeName<T>(t: T): TypeName<T> {
    if (t === null) return "null" as TypeName<T>
    return typeof t as TypeName<T>
}

const number = getTypeName(2); // number
const string = getTypeName('2'); // string
const fn = getTypeName(function() {}); // function
const nil = getTypeName(null); // null
