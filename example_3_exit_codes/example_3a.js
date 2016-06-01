#!/usr/bin/env node

// 
// Your command line apps should use proper exit codes!
//
// if (err) {
//   process.exit(1);
// } else {
//   process.exit(0);
// }
//

var program = require('commander');
 
program
  .version('0.0.1')
  .arguments('<name> [times]')
  .action(function (name, times) {
     nameValue = name;
     timesValue = times || 1;
  });
 
program.parse(process.argv);

if (typeof nameValue === 'undefined') {
  console.log('You need to pass in a name dummy!');
  process.exit(1);
} else {
  for (var i = 0; i < timesValue; i++) {
    console.log('Hi ' + nameValue);
  }
  process.exit(0);
}
