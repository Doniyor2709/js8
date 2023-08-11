const obj = {
  a: 2,
  b: 3,
  c: 4,
  d: 6,
};
const n = 3;

const getMultipleValues = (obj, n) => {
  const res = {};
  for (const key in obj) {
    res[key] = obj[key] * n;
  }
  return res;
};

const res = getMultipleValues(obj, n);
console.log(res);