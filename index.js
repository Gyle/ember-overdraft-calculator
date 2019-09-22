const express = require('express');

var path = require('path'); 

const PORT = process.env.PORT || 5000;

var app = express();

app.use(express.static(__dirname + '/dist'));

app.listen( PORT, () => console.log('Listening on ' + PORT));

// Serve frontend if non API request
app.get(/^(?!\/?api).+$/, (req, res) => {  
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});