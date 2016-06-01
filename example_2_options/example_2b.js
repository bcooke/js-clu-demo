#!/usr/bin/env node

// 
// Installer commander! (https://www.npmjs.com/package/commander)
//
// npm install commander --save
//

var program = require('commander');

//
// Simple boolean options / flags
//

program
  .option('-k --keenan')
  .option('-e --eric')
  .option('-s --scott')
  .option('-j --jonathon')
  .option('-p --patrick')
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

// You can chain them like other boolean flags:
//
// demo -kesjp
//
// Multi-word options are camed-cased: 
// so brett-cooke would become program.brettCooke
