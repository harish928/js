var name = prompt("Enter your Name");
var year = prompt("Enter you Birthyear");
var age = (2018 - year);
var statement =("Hi" +name + "Your age is"  +age); //string concatination
var stat2 = (`Hi ${name} your age is ${age}`); //uisng regular expression
alert(statement);
console.log(statement);
