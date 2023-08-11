const obj = 85;

const getGrade = (obj) => {
  if (obj >= 90 && obj <= 100) {
    return 5;
  } else if (obj >= 80 && obj < 90) {
    return 4;
  } else if (obj >= 70 && obj < 80) {
    return 3;
  } else {
    return 2;
  }
};

const grade = getGrade(obj);
console.log(grade);