
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const getPhoto = require('./db.js').getPhoto;
var bodyParser = require('body-parser');


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json())

app.get('/photos', function (req, res) {
  console.log('get called')
	getPhoto((err, data) => {
    console.log('we are getting the new data')
    
    res.send(JSON.stringify(data));
  
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});



