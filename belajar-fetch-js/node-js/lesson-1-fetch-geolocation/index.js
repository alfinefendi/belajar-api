const express = require('express');
const app = express();
const port = 3000;
const ip = '192.168.1.9';


app.listen(port, ip, () => console.log(`server successfuly running on ${port}`));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));


app.post('/api',(req,res)=> {
    console.log('data received !');
    console.log(req.body);
    const data = req.body;
    res.json({
        status: 'success',
        latitude: data.latitude,
        longitude: data.longitude
    });
});