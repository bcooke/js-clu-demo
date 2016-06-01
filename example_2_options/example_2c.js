#!/usr/bin/env node

//
// Commander automatically generates command help
// 

var program = require('commander');

program
  .option('-k --keenan', 'Say hi to Keenan')
  .option('-e --eric', 'Say hi to Eric')
  .option('-s --scott', 'Say hi to Scott')
  .option('-j --jonathon', 'Say hi to Jonathon')
  .option('-p --patrick', 'Say hi to Patrick')
  .parse(process.argv);

console.log('Hi ');

if (program.keenan) {
  console.log('Keenan');
}

if (program.eric) {
  console.log('Eric');
}

if (program.scott) {
  console.log('Scott');
}

if (program.jonathon) {
  console.log('Jonathon');
}

if (program.patrick) {
  console.log('Patrick');
}

// 
// demo --help
// 
