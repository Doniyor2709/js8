const product = {
  name: "iPhone 14",
  company: {
    name: "Apple",
    price: "200 billion",
    founder: {
      firstName: "Steve",
      lastName: "Jobs",
      birthDate: 1950,
    },
  },
};

const {
  name,
  company: { name: companyName, price, founder: { firstName, lastName, birthDate } },
} = product;

console.log(name);
console.log(companyName);
console.log(price);
console.log(firstName);
console.log(lastName);
console.log(birthDate);