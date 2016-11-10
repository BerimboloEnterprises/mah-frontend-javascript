"use strict";

// Assignment 2 Front-End develpoment Marcus Linsdtedt Malmö Hägskola

// Part 1 Functions

function maxValue(x, y){
  if(x == y)
  {
    return x;
  }

  if(x > y)
  {
    return x;

  }

  else
  {
    return y;
  }
}

function minValue(x, y){
  if(x == y)
  {
    return x;
  }

  if(x > y)
  {
    return y;

  }

  else
  {
    return x;
  }
}

// Part 2 Adding to Array

function range(maxNumberInArray){
    var numberArray = [];

    // Since arrays start at index 0 the final number pushed will always be
    // 1 less than the one entered. If you want the final number to be
    // the same as the one you enter just add +1 in the range argument.
    for(var i = 0; i < maxNumberInArray; i++)
    {
      numberArray.push(i);
    }
    return numberArray;
}

// Part 3 Adding values in an arrays

var numbers = [5, 10, 15, 20, 25];
var sumOfNumbers = sum(numbers);
console.log("The sum of the numbers in the array is: " + sumOfNumbers);

function sum(arr){
  var total = 0;
  for(var i = 0; i < numbers.length; i++)
  {
    total += numbers[i];
  }
  return total;
}

// Part 4 Counting characters in a String

var testString1 = "Jane Doe";
var testString2 = "Abracadabra";

function countOcurrences(str, value) {
  var count = 0;

  for(var i = 0; i < str.length; i++){
    if(str[i] == value){
      count += 1;
    }
  }
  return count;
}

console.log("The number of times the character appears: " + countOcurrences(testString1, 'e'));
console.log("The number of times the character appears: " + countOcurrences(testString2, 'a'));

// Part 5 Palindrome check

function palindromeCheck(str)
{
  /*
  This code is probably what you are looking for in terms of a solution but I
  prefer my solution which is the on that is active.

  var tempText = str;
  tempText = tempText.split("").reverse().join("");
  if(tempText == str)
  {
    return true;
  }

  else {
    return false;
  }
  */

  return str == str.split("").reverse().join("");
}

// Part 6 Creating objects

var Person = {
  firstname: "Simon",
   lastname: "Hillcrest",
    age: 38,
    family: ["Tim", "Helen","Josephine", "Antonio"]
   }

// Part 7 Printing the values of created objects

function printPerson(personToPrint){
  console.log(personToPrint.firstname);
  console.log(personToPrint.lastname);
  console.log(personToPrint.age);
  console.log(personToPrint.family);
}

// Part 8 Create Box

function createBox(height, width){
  var box = {
    height: height,
    width: width
  };

  return box;

  console.log(box.height);
  console.log(box.width);
}

// Part 9 Triangle function

function Triangle(height, width){
  var triangle = {
    height: height,
    width: width,
    area: function(){
      this.height = height;
      this.width = width;
      var result = height * width / 2;
      return result;
    }
  };

  return triangle;
  console.log(triangle.height);
  console.log(triangle.width);
  console.log(triangle.area());
  }

// Part 10 return arrays

var attributesFromObject1 = attributes(obj1);

  function attributes(obj){
    var temp = [];
    for(var attributes in obj){
      temp.push(attributes);
    }
    return temp;
    };

    var obj1 = {
      width: 15,
      height: 1337
    };

    var attributesFromObject1 = attributes(obj1);
    console.log(attributesFromObject1);

    var obj2 = {
      a: 1,
      b: 2,
      c: 3
    };

    var attributesFromObject2 = attributes(obj2);
    console.log(attributesFromObject2);
