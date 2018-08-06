
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const getPhoto = require('./route').getPhoto;

const app = express();
const bodyParser = require('body-parser');


app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/api/listing/:listingId', (req, res) => {

  getPhoto(((err, data) => {
    console.log('callback running')
    if (err) {
      console.log(err);
      return;
    }

    res.send((data));
  }), req.params.listingId);
});

app.use('/listing/:listingId', express.static(`${__dirname}/../public`));

module.exports = app;
