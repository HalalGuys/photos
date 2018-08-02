console.log('sam might not come......')
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
console.log('sam might not come......')
const getPhoto = require('./db.js').getPhoto;
console.log('sam might not come......')

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/api/listing/:listingId', (req, res) => {
  console.log('get called');
  console.log('listing id', req.params.listingId);

  getPhoto(((err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('we are getting the new data'); 
    res.send((data));
  }), req.params.listingId);
});
console.log('sam might not come......')
app.use('/listing/:listingId', express.static(`${__dirname}/../public`));
console.log('sam might not come......')
module.exports = app;
