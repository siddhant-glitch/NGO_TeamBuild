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
    console.log('Home page');
    res.sendFile(path.join(__dirname, '../views/index.html'));
})

router.get('/dim', (req, res) => {
    console.log('on Dims page');
    // res.end(`this is dim's page`);   // ends stop the interaction with the routes, 'send' does not
    res.sendFile(path.join(__dirname, '../views/sid.html'));
    
    // res.sendFile(path.join(__dirname, '../views/index.html'));
})

router.get('/irene', (req, res) => {
    console.log('Irene page');
    // res.end(`this is dim's page`);   // ends stop the interaction with the routes, 'send' does not
    res.sendFile(path.join(__dirname, '../views/irene.html'));
    
    // res.sendFile(path.join(__dirname, '../views/index.html'));
})

router.get('/hyeon', (req, res) => {
    console.log('Hyeon page');
    // res.end(`this is dim's page`);   // ends stop the interaction with the routes, 'send' does not
    res.sendFile(path.join(__dirname, '../views/hyeon.html'));
    
    // res.sendFile(path.join(__dirname, '../views/index.html'));
})


// this catche3es broken routes
router.use((req, res) => {
    
    res.sendFile(path.join(__dirname, '../views/404.html'));
})

export default router;