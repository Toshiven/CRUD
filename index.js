const dbConnect = require('./mongodb');
const express = require('express');
const { response } = require('express');
const app = express();
app.use(express.json());

//get

app.get('/', async(req, res) => {
    let result = await dbConnect();
    result = await result.find().toArray();
    res.send(result);
})

//post

app.post('/', async(req, res) =>{
    let result = await dbConnect();
    result = await result.insertOne(req.body);
    res.send('Data inserted!');
})

app.listen(3000);