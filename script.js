//Create the birth year and current year as input.
let birthYear = parseInt(prompt("Enter birth Year: "));
let currentYear = parseInt(prompt("Enter current year: "));

//Create a subtraction function
function subtraction() {
   //Calculate the age by subtracting the birth year from the current year.
   return currentYear - birthYear;
}

//Invoke subtraction function to run calculated age.
