# nodefun
Welcome to the online material for our two-part course on NodeJS. We will teach you the basics on how to use NodeJS as a JavaScript engine, package manager, web server and development toolset.

This repository contains a set of exercises as support to the course material.

Open your bash console, and type:
```
node
```

You are now at the NodeJS command-line, ready to give javascript commands. Now run the following commands:

``` javascript
var message = 'hello node';
console.log(message);
var obj = { 'param': 'value', 'number':5 }
console.log(obj.param + ' / ' + obj.number);
```

As you can see, any javascript command can be executed. Now have some fun experimenting, we will discuss afterwards.

## 2. Working with modules
Create the file `app.js`, add `console.log(module)`
Run `node app.js`, and check the output.

Create the file `calc.js`
```javascript
function sum(a, b) {
    return a + b;
}

module.exports.sum = sum;

console.log(module);
```

Modify the app.js
```javascript
console.log(module);
var calc = require('./calc');

var amount = calc.sum(10, 20);
console.log(amount);
```

## OS
```javascript
const os = require('os');

console.log(os.platform());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.cpus());
```

## Filesystem
```javascript
const fs = require('fs');

// Read all files in the current directory and log the result.
fs.readdir('./fsadfsad', (error, files) => {
    if (error) return console.error(error);

    return console.log(files);
});
```


## 3. Create mock server using Express
Run `npm install express --save` to install the Express package.

Create the file `express.js` and configure the webserver as follows:
```javascript
const express = require('express'); // load package
const app = express(); // execute express
const port = 3000; // the port the webserver should run on
```

Express is now running withing the app constant. Now use the app constant to configure Express on which port to listen.
```javascript
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```
Executing `node express.js` will now create an Express server which listens on the configured port.

If you open `localhost:3000` in a browser you'll get the message `Cannot GET /`. This is caused by the attempt to fire a GET request on the root of the server, without configuration on how to handle the request. Add the following to set a response and try again.
```javascript
app.get('/', (req, res) => res.send('Hello World!'))
```
