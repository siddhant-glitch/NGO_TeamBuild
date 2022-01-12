//const http = require('http');

import { createServer } from 'http';

//const hostname = '127.0.0.1';   // don't need this to make heroku work the next statement does the job, heroku cannot understand the port 3000 statement so we have to modify it, an we're doing it on a different branch because heroku tracks the master branh(or the one we set to deploy) and we need to keep our working tree clean.
//const port = 3000;

const port = process.env.PORT || 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>This is really easy!</h1>');
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});