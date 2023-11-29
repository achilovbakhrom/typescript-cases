function formatCommandLine(input: string | string[]) {
  let line = "";

  if (typeof input === "string") {
    line = input.trim();
  } else {
    line = input.map((x) => x.trim()).join(" ");
  }

  return line;
}

console.log(formatCommandLine("Hello"));
console.log(formatCommandLine(["Hello", "World"]));
console.log(formatCommandLine(1337)); // Error, map function is not found
