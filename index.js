#!/usr/bin/env node

// 
// UNIX Signals
//
// Node.js has great UNIX support including for Signals.
// This means you can send a script a signal and get it to do something. 
// In the following example the script does nothing but idle until it gets a SIGINT.
//

process.stdin.resume();

process.on('SIGINT', function () {
  console.log('Got a SIGINT. Peace!');
  process.exit(0);
});

//
// Now if you can see your own process running if you do:
// ps aux | grep demo
//
// And send a SIGINT signal like this:
//
// kill -s SIGINT [process_id]
//