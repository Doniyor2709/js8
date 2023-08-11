function obj(object) {
  const newObject = {};
  for (const key in object) {
    if (object[key] !== false) {
      newObject[key] = object[key];
    }
  }
  return newObject;
}

const object = {
  a: false,
  b: 12,
  c: true,
  d: 0,
};

const newObject = obj(object);
console.log(newObject);