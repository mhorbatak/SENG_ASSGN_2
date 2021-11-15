const basicMath = require("@mferns/basic-math");
console.log("Mike Horbatak - SENG 560 - Programming Assignment 2");


// Addition function
var a = 2;
var b = 10
var add = basicMath.add(a, b) 
console.log(a + " + " + b +" = " + add);


// Subraction function

var a = 100;
var b = 10

var subtract = basicMath.subtract(a, b);
console.log(a + " - " + b +" = " + subtract);


// Multiply function

var a = 25;
var b = 4;

var multiply = basicMath.multiply(a, b);
console.log(a + " * " + b +" = " + multiply);

// Divide function

var a = 100;
var b = 10;

var divide = basicMath.divide(a, b);
console.log(a + " / " + b +" = " + divide);