const express = require('express'); // load package
const app = express(); // execute express
const port = 3000; // the port the webserver should run on

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', (req, res) => res.send('Hello World!'))
