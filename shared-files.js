#!/usr/bin/env node

//connecting to the fs mod to use the read file function
var fs = require('fs');



// This creates the commander style presentation to give commands for the user using the above program.
var commander = require('commander');
commander
  .version('0.0.1', 'Output the version number')
  .option('-h, --help', 'output usage information')
  .option('-n, --number', 'report just the number of words')
  .option('-v, --verbose', 'Be more verbose, report timing information')
  .option('-t, --try')
  .option('-sh, --sharedwords')
  .parse(process.argv);

//declaring variables for use in functions
var newArray1 = [];
var newArray2 = [];
var newArray3 = [];
var finalArray = [];

//pulling the commander arguments and declaring variables for use below
var file1 = commander.args[0];
var file2 = commander.args[1];

// counting the number of like words
if (commander.number) {
  // Reads file1, puts the individual words into array1
  fs.readFile(file1, {encoding: 'utf8'}, function(error, contents){
   var newContent1 = contents.replace(/[\.,]/g, '');
   newArray1 = newContent1.split(' ');
  // Reads file2, puts the individual words into array2
   fs.readFile(file2, {encoding: 'utf8'}, function(error, contents){
     var newContent2 = contents.replace(/[\.,]/g, '');
     newArray2 = newContent2.split(' ');

  // loops through each, comparing the [0] of array 1 to each [j]
  // if the same, pushes the element into array3
     for(var i = 0; i < newArray1.length; i++){
       for(var j = 0; j < newArray2.length; j++){
       if(newArray1[i] === newArray2[j]){
         newArray3.push(newArray1[i]);
         }
       }
     }
  // getting rid of duplicates for finalArray.
     for(var i = 0; i < newArray3.length; i++){
       if(newArray3[i] !== newArray3[i-1]){
         finalArray.push(newArray3[i]);
       }
     }
  // prints the number of final array, which is the list of shared words.
     console.log(finalArray.length);
   });
 });
}

if (commander.sharedwords) {
  fs.readFile(file1, {encoding: 'utf8'}, function(error, contents){
   var newContent1 = contents.replace(/[\.,\n]/g, '');
   newArray1 = newContent1.split(' ');

   fs.readFile(file2, {encoding: 'utf8'}, function(error, contents){
     var newContent2 = contents.replace(/[\.,\n]/g, '');
     newArray2 = newContent2.split(' ');

     for(var i = 0; i < newArray1.length; i++){
       for(var j = 0; j < newArray2.length; j++){
       if(newArray1[i] === newArray2[j] && newArray1[i] !== ''){
         newArray3.push(newArray1[i]);
         }
       }
     }
     for(var i = 0; i < newArray3.length; i++){
       if(newArray3[i] !== newArray3[i-1]){
         finalArray.push(newArray3[i]);
       }
     }
     console.log(finalArray);
   });
 });
}

// while(array1.length > 0 ) {console.log(array1.pop())}
