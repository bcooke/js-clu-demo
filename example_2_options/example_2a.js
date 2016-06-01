#!/usr/bin/env node
console.log(process.argv);

// process.argv contains the arguments passed
// 
// If you run just 'demo', the output will be:
//
// [ '/Users/Envoy/.nvm/versions/node/v5.3.0/bin/node',
//   '/Users/Envoy/.nvm/versions/node/v5.3.0/bin/demo' ]
//
// The first value in process.argv is the execution environment.
//
// The second is the script being executed.
//
// If there are other options present, they're added in the order
// they appear to the argv array
//
// If you run 'demo hey guys', you get:
//
// [ '/Users/Envoy/.nvm/versions/node/v5.3.0/bin/node',
//   '/Users/Envoy/.nvm/versions/node/v5.3.0/bin/demo',
//   'hey',
//   'guys' ]
//
// So just with this, you could parse all the args and
// basically do anything you want..
//
// var args = process.argv.slice(2);
//
// ..but there's a better way.