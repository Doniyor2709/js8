function obj(tovar) {
  let narxi = 0;
  for (const product in tovar) {
    narxi += tovar[product];
  }
  return narxi;
}

const tovar = {
  "Orange": 10000,
  "Apple": 12000,
  "Tangerine": 8000,
  "Banana": 20000,
};

const narxi = obj(tovar);
console.log(narxi);