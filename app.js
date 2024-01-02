const express = require('express');
const fs = require('fs');
const fsp = fs.promises;

const app = express();

app.get('/api/', (req, res, next) => {
    fs.readFile('C:/Users/anant/OneDrive/Desktop/sample_json_files/file.json', (err, data) => {
        let json = JSON.parse(data);
        res.send(json);
    })
});

app.listen(3000);