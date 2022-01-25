//const http = require('http');

import express from 'express';
import router from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';
//import { mainModule } from 'process';     // for error handling only might have to ADD IT AGAIN     // nah we don't need it lmao



// set up the root directory reference
// find the global URL using fileURLToPath
// and them turn that into the __dirname (something like users/desktop/Dimri_S_NGO_TeamBuild)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

const app = express();

//const hostname = '127.0.0.1';   // don't need this to make heroku work the next statement does the job, heroku cannot understand the port 3000 statement so we have to modify it, an we're doing it on a different branch because heroku tracks the master branh(or the one we set to deploy) and we need to keep our working tree clean.
//const port = 3000;
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

//tell app to use the router file
app.use('/', router);

app.listen(port, () => {
  console.log(`Server running at: ${port}/`);
});