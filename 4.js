function obj(array) {
  const object = {};
  for (const string of array) {
    const length = string.length;
    object[length] = string;
  }
  return object;
}

const array = ["Abdulaziz", "Safarmurad", "Orol", "Jahongir"];
const object = obj(array);
console.log(object);