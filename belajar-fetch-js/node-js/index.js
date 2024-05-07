const express = require('express');
const DataStore = require('nedb');
const app = express();
const port = 3000;
const ip = '192.168.1.9';


app.listen(port, ip, () => console.log(`server successfuly running on ${port}`));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

// create a db, and store to it
const database = new DataStore('database.db');
database.loadDatabase();



app.post('/api',(req,res)=> {
    console.log('data received !');
    console.log(req.body);
    const data = req.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    res.json({
        status: 'success',
        latitude: data.latitude,
        longitude: data.longitude,
        timestamp: data.timestamp
    });
});