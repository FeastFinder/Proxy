const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const port = 3000;
require('newrelic');


app.use(express.static('public'));


app.listen(port, () => { console.log(`Proxy server listening on port ${port}`); });
