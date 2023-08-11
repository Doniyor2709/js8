function jami(products, discount) {
  let hammasi = 0;
  for (const product of products) {
    let amount = product.price * product.quantity;
    amount = amount * (1 - discount / 100);
    hammasi += amount;
  }
  return hammasi;
}

const products = [
  {
    name: "Product 1",
    price: 20000,
    discount: 10,
    quantity: 5,
  },
  {
    name: "Product 2",
    price: 10000,
    discount: 20,
    quantity: 4,
  },
  {
    name: "Product 3",
    price: 15000,
    discount: 8,
    quantity: 10,
  },
  {
    name: "Product 4",
    price: 18000,
    discount: 5,
    quantity: 6,
  },
  {
    name: "Product 5",
    price: 5000,
    discount: 10,
    quantity: 16,
  },
];
const discount = 10;
const hammasi = jami(products, discount);
console.log(hammasi);