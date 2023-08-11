const obj = 85;
const Passed = false;

const setIsPassed = (obj, Passed) => {
  if (obj > 70 && obj === Passed) {
    Passed = true;
  } else {
    Passed = false;
  }
  return Passed;
};

const isPassedStatus = setIsPassed(obj, Passed);
console.log(isPassedStatus);