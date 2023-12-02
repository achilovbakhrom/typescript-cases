type NamesField = { firstName: string; lastName: string };

function addFullName<T extends NamesField>(arg: T): T & { fullName: string } {
  return {
    ...arg,
    fullName: `${arg.lastName} ${arg.firstName}`,
  };
}

const result1 = addFullName({
  email: "john@example.com",
  firstName: "John",
  lastName: "Doe",
});
console.log(result1.firstName);
console.log(result1.fullName);

// hovewer, we will get error if we don't provide firstname or lastname
addFullName({ email: "some@example.com" });
