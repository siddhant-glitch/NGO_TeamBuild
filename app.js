//const http = require('http');

import express from 'express';

const app = express();

//const hostname = '127.0.0.1';   // don't need this to make heroku work the next statement does the job, heroku cannot understand the port 3000 statement so we have to modify it, an we're doing it on a different branch because heroku tracks the master branh(or the one we set to deploy) and we need to keep our working tree clean.
//const port = 3000;
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello from express!');
})

app.get('/trevor', (req, res) => {
    res.send(`this is dim's page`);
})


app.listen(port, () => {
  console.log(`Server running at: ${port}/`);
});