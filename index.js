// adding two numbers
// const add = (arr) => {
// return arr.reduce((a, b)=> a+b)
// };
// console.log("addd",add([1,2,4,9,4]));

const add2 =(arr)=> {
  let sum = 0
  for (let i = 0 ; i< arr.length; i++){
    sum += arr[i]
  }
return sum
}

console.log("sum", add2([8,7,65,4]));


// subtracting two numbers
const subtract = (a, b) => {
  return a - b;
};

// multiplying two numbers
const multiply = (a, b) => {
  return a * b;
};

// dividing two numbers 
const divide = (a, b) => {
  return a / b;
};

// console.log(add(3, 10))