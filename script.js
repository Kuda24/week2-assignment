//Create the birth year and current year as input.
let birthYear = parseInt(prompt("Enter birth Year: "));
let currentYear = parseInt(prompt("Enter current year: "));

//Create a subtraction function
function subtraction() {
   //Calculate the age by subtracting the birth year from the current year.
   return currentYear - birthYear;
}

//Invoke subtraction function to run calculated age.
console.log(subtraction());

console.log(subtraction());

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Even numbers in the array:");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}
