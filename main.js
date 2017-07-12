const express = require('express');
const app = express();
var utilities = require('./utilities.js');
console.log( utilities.somefunction);

console.log("this works");

app.listen(3000, function(){
  console.log('up and running');
})
