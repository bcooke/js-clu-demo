#!/usr/bin/env node
console.log('That was easy');

//
// Steps to create your own Node Command Line Untility
//
// 1) Make a new directory and initialize new npm package
//
//    mkdir js-clu-demo
//    cd demo
//    npm init -y
//
// 2) Create a new file called index.js
//
//    touch index.js
//
// 3) Open index.js, 
//    declare node as the environment with a shebang,
//    and console.log something
//
//    /// index.js ///
//
//    #!/usr/bin/env node
//    console.log('That was easy');
//
// 4) Add a "bin" entry to package.json, and map it to the index.js
//    
//    /// package.json ///
//
//    {
//      "name": "js-clu-demo",
//      "version": "1.0.0",
//      "description": "",
//      "main": "index.js",
//      "scripts": {
//        "test": "echo \"Error: no test specified\" && exit 1"
//      },
//      "keywords": [],
//      "author": "",
//      "license": "ISC",
//      "bin": {
//        "demo": "./index.js"
//      }
//    }
// 
// 5) Install the package globally
//
//    (from inside js-clu-demo)
//
//    npm install -g
//
// 6) Add a symlink to make development more fun
// 
//    npm link
//