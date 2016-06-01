#!/usr/bin/env node

//
// Make your own git-style sub-commands!
//

var program = require('commander');
 
program
  .version('0.0.1')
  .command('subcommand1', 'im a nice subcommand')
  // .command('subcommand1', 'im a nice subcommand', {isDefault: true})
  .command('subcommand2', 'im a mean subcommand')
  .parse(process.argv);
