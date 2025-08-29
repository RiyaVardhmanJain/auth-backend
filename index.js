function addNumbers(a, b) {
  let sum = a + b;
  if (sum > 10) {
    console.log("Big number:" + sum);
  } else {
    console.log("Small:" + sum);
  }
  return sum;
}
const result = addNumbers(5, 8);
console.log(result);
