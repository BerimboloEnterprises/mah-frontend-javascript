"use strict";

// Assignment 1 Front-End develpoment Marcus Linsdtedt Malmö Hägskola
// We were given strict variable names to use which explains the generally
// terrible naming conventions. I do hope that anyone who reads this still
// can understand the concepts herein.

// Part 1 Arithmetic

console.log( 5 * 2  < 12 );
console.log( 55 !=  22 );
console.log( 16 / 4 ==  4 );
console.log( 8 + 2  <= 128 );
console.log( 32 * 8  > 255 );

// Part 2 Substring

var tuesday = "Tisdag";
var burger = "Hamburgare";
var terminator = "I'll be back!";

console.log(tuesday.substring(0,3));
console.log(burger.substring(3,0));
console.log(terminator.substring(5));

// Part 3 String manipulation

var learn = "It's Learning";
var saying = "JavaScript: The Good Parts";

console.log(learn.substring(5).toUpperCase());
console.log(saying.substring(16).toLowerCase());

// Part 4 Arrays

var number = [128, 256,512, 1024, 2048];
var sumOfNumbers = 0;

for (var i = 0, n = number.length; i < n; i++)
{
  sumOfNumbers += number[i];
}

console.log("The sum of the numbers are: " + sumOfNumbers);

var avgNumber = sumOfNumbers/number.length;

console.log("The average of the numbers are: " + avgNumber);

number.push(sumOfNumbers);

console.log(number);

// Part 5 Arrays continued

var countries = ["Sweden", "Denmark", "Finland", "Norway"];
var num2 = countries[1].substring(0,3);
console.log(num2);

var sumOfCharacters = 0;
for (var i = 0; i < countries.length; i++) {
    sumOfCharacters += countries[i].length;
}
var avgCharacters = sumOfCharacters / countries.length;
console.log("The average amount of characters: " + avgCharacters);

  // Part 6 Reversing array

  var values = [3, 5, "Jane", true, 144, false];
  values.reverse();
  console.log(values);

  // Part 7 Concatenating Arrays

  var names = ["Jane", "Joe", "Eliza"];
  var ages = [21,34,22];
  var hasPet = [true,false,true];
  var multipleArrays = names.concat(ages, hasPet);
  console.log(multipleArrays);

  // Part 8 Array to String

var actors = ["Sherlock", "Watson", "Bo"];
var textString = actors.join(" - ");
console.log(textString);

// Part 9 Conditionals

var amount = 50;

if(amount < 50){
  console.log("Amount is less than 50");
}
else if (amount >= 50 & amount < 65) {
  console.log("Optimal range for amount");
}
else{
  console.log("Too much is never enough");
}

// Part 10

var multiplier = 25;
var textstring2 = "";
for (var i = 0; i < multiplier; i++) {
  textstring2 += "#";
  console.log(textstring2);
}
