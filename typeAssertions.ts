let hello = load();

const trimmed = (hello as string).trim();
const trimmed2 = (<string>hello).trim();
