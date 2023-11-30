type Person = {
  name: string;
};

type Email = {
  email: string;
};

type Phone = {
  phone: string;
};

type ContactDetails = Person & Email & Phone;

function contact(details: ContactDetails) {
  console.log(`
    Details
        Name: ${details.name};
        Email: ${details.email};
        Phone: ${details.phone};
    `);
}
