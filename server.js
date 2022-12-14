const express = require('express');
const app = express();
const homeDate = require('./data.json');

app.listen(process.env.PORT || 8080 , (error) => {
    console.log("Server ruining into: http://localhost:8080/")
});

app.get('/', (req, res) => {
    res.send('Hosting successfuly')
});

app.get('/home', (req, res) => {
    res.status(200).json({home: homeDate})
});