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

Let's see what you can do with the browsers window and document object!
``` javascript
console.log(window, document);
```
Nothing! So what can you actually get out of the node environment?

## Operating System
Node is a JavaScript engine within the machine it runs on, so you get access to system resources, like 'os' (Operating System) and 'fs' (File System).
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

## Http
Node.js is ideal for creating simple servers. By default you'll get access to `http`. Let's see how you can create your own localhost server, listening on port `1337`.
```javascript
const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(1337);

console.log(`Server running at port 1337`);
```
Let's make the script a little bit more agile. The port can be set by default within the machines environment.
```javascript
const port = process.env.port || 1337;

console.log(`Server running at port ${port}`);
```
With this line we check if the port is set, otherwise use the default value 1337.

## Node built-in modules
https://www.w3schools.com/nodejs/ref_modules.asp

## 2. Creating modular code
Create the file `app.js`, add `console.log(module)`
Run `node app.js`, and check the output.

Create the file `calc.js`
```javascript
function sum(a, b) {
    return a + b;
}
```

We have created a function, now let's export the function within the module.
```javascript
module.exports.sum = sum;
console.log(module);
```

Modify the app.js to require the calc module.
```javascript
console.log(module);
var calc = require('./calc');

var amount = calc.sum(10, 20);
console.log(amount);
```

## 3. Create mock server using Express
TODO: Add server folder with mocked json files and empty server.js
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

## 4. Node Package Manager (NPM)
Create a new folder and change your terminal to the created directory.
`mkdir myproject && cd myproject`

Run `npm init` to go through the setup wizard.
Check the generated package.json.
Todo: difference dependencies / devDependencies.