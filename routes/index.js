import express from 'express';
const router = express.Router();

import path from 'path';
import { fileURLToPath } from 'url';

// set up the root directory reference
// find the global URL using fileURLToPath
// and them turn that into the __dirname (something like users/desktop/Dimri_S_NGO_TeamBuild)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//this is the equivlent of index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
})

router.get('/dim', (req, res) => {
    res.send(`this is dim's page`);
    console.log('on dims page');
    // res.sendFile(path.join(__dirname, '../views/index.html'));
})


// this catche3es broken routes
router.use((req, res) => {
    console.log('page doesnt exist');
    res.sendFile(path.join(__dirname, '../views/404.html'));
})

export default router;