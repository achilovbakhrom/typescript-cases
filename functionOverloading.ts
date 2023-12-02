function reverse(arg: string): string;
function reverse(arg: string[]): string[];
function reverse(stringOrStringArray: string | string[]) {
  if (typeof stringOrStringArray == "string") {
    return stringOrStringArray.split("").reverse().join("");
  } else {
    return stringOrStringArray.slice().reverse();
  }
}

// before overloading return type is string | string[]
const hello = reverse("hello"); // olleh
const h_e_l_l_o = reverse(["h", "e", "l", "l", "o"]); // ['o', 'l', 'l', 'e', 'h']

// after overloading type of hello is string
// after overloading type of h_e_l_l_o is string[]

function makeDate(timestamp: number);
function makeDate(year: number, month: number, day: number);
function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
  if (month != null && day != null) {
    return new Date(timestampOrYear, month - 1, day);
  } else {
    return new Date(timestampOrYear);
  }
}

const day1 = makeDate(2000, 1, 1);
const day2 = makeDate(0); // epoch date

const day3 = makeDate(2000, 10); // this also possible, but we should prevent this
