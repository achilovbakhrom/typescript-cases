let templateLiteralType: `Example: ${string}` = "Example: ";
templateLiteralType = "Example: some other string";
templateLiteralType = "Example: "; // with empty string

type CSSValue = number | `${string}px` | `${string}em` | `${string}rem`;

function size(value: CSSValue) {
  return typeof value === "number" ? value + "px" : value;
}

size(12);
size("12px");
size("12em");
size("12rem");
size("12ex"); // should be error

type Size = "small" | "medium" | "large";
type Color = "primary" | "secondary";

type Style = `${Size}-${Color}`;

function applyStyle(style: Style) {
  // implementation here
  console.log("Style: ", style);
}

applyStyle("large-primary");
applyStyle("medium-primary");
applyStyle("small-large"); // error here
