// this parameter must be ALWAYS FIRST parameter
function double(this: { value: number }) {
  this.value = this.value + 10;
}

const valid = {
  value: 10,
  double,
};

valid.double(); // now, value field is 20

const invalid2 = {
  valve: 10,
  double,
};

invalid2.double(); // error, because invalid2 doesn't have value field
