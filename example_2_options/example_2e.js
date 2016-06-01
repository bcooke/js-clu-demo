#!/usr/bin/env node

var program = require('commander');
 
program
  .version('0.0.1')
  .arguments('<name> [times]')
  .action(function (name, times) {
     nameValue = name;
     timesValue = times || 1;
  });
 
program.parse(process.argv);
 
for (var i = 0; i < timesValue; i++) {
  console.log('Hi ' + nameValue);
}
