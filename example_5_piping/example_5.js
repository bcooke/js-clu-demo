#!/usr/bin/env node

// 
// Piping with your CLIs
//
// You're probably familiar with piping, ala:
// ps aux | grep 'node'
//
// Your Node command line utilities can be piped to and from
//

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
  process.stdout.write(data);
});

//
// Now try: echo 'wassup' | demo
//