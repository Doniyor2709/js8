const obj = {
  "it": 20,
  "mushuk": 10,
  "sigr": 200,
  "tovuq": 2,
};

const arrayOfKeysAndValues = [];
for (const key in obj) {
  arrayOfKeysAndValues.push([key, obj[key]]);
}

console.log(arrayOfKeysAndValues);