const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/api/', (req, res, next) => {
    fs.readFile('C:/Users/anant/OneDrive/Desktop/sample_json_files/file.json', (err, data) => {
        let json = JSON.parse(data);
        res.send(json);
    })
});

app.post('/api/', (req, res, next) => {
    fs.writeFile('C:/Users/anant/OneDrive/Desktop/sample_json_files/file.json', JSON.stringify(req.body), (err) => {
        if(!err){
            return res.status(200).json({ success: true, msg: 'File saved successfully.'});
        }
        res.send(500).json({success: false, msg: 'Error saving the data. Please retry.'});
    })
})

app.listen(3000);