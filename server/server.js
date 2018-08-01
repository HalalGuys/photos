
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const getPhoto = require('./db.js').getPhoto;
var bodyParser = require('body-parser');


app.use(morgan('dev'));
app.use(bodyParser.json())

app.get(`/api/listing/:listingId`, function (req, res) {
  console.log('get called')
  console.log('listing id', req.params.listingId)
	getPhoto(((err, data) => {
    if(err){
      console.log(err);
      return;
    }
    console.log('we are getting the new data')
    
    res.send((data));
  
  }), req.params.listingId);
});

app.use('/listing/:listingId',express.static(`${__dirname}/../public`));
module.exports = app