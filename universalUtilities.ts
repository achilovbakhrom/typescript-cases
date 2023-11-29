function log2(value: unknown) {
  if (typeof value === "number") console.log(value.toFixed(2));
  else console.log(value);
}

log2(123.456);
log2("Hello world");
