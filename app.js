const express = require('express');
const fs = require('fs');
const fsp = fs.promises;

const app = express();

app.get('/', (req, res, next) => {
    fs.readFile('C:/Users/anant/OneDrive/Desktop/sample_json_files/file.json', (err, data) => {
        res.send(JSON.parse(data));
    })
});

app.listen(3000);