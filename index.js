require('dotenv').config();
const express = require('express');
const request = require('request-promise');
const stackexchange = require('stackexchange');

const app = express();
const PORT = process.env.PORT || 5000;
const options = { version: 2.2 };
const context = new stackexchange(options);

app.use(express.json());

// to know that server is running
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    //res.send('Welcome to stackoverflow Scraper');
    res.write("<h2><a href='/dataset1' target=blank>Dataset 1</a> get with tag Webcrypto-api</h2>");    
    res.write("<h2><a href='/dataset2' target=blank>Dataset 2</a> get with tag cryptojs</h2>");    
    res.write("<h2><a href='/dataset3' target=blank>Dataset 3</a> get with simultaneous tags javascript and cryptography</h2>");

    res.end();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

let filter_1 = {
    key: process.env.API_KEY,
    pagesize: 100,
    tagged: 'webcrypto-api',
    sort: 'votes',
    order: 'desc',
    
};

let filter_2 = {
    key: process.env.API_KEY,
    pagesize: 100,
    tagged: 'cryptojs',
    sort: 'votes',
    order: 'desc',
    
};

let filter_3 = {
    key: process.env.API_KEY,
    pagesize: 100,
    tagged: 'javascript;cryptography',
    sort: 'votes',
    order: 'desc',
    
};

app.get('/dataset1', (req, res) => {

    //get relevant posts with tag webcrypto-api
    context.questions.questions(filter_1, function(err, results){
        if (err) throw err;

        res.json(results.items);

    });

    
});

app.get('/dataset2', (req, res) => {

    //get relevant posts with tag webcrypto-api
    context.questions.questions(filter_2, function(err, results){
        if (err) throw err;

        res.json(results.items);

    });

    
});

app.get('/dataset3', (req, res) => {

    //get relevant posts with tag webcrypto-api
    context.questions.questions(filter_3, function(err, results){
        if (err) throw err;

        res.json(results.items);

    });

    
});
