
const mongoose = require('mongoose');

mongoose.connect('mongodb://database/fecphotos');


const PropertySchema = mongoose.Schema({
  property_id: Number,
  photos: [
    {
      url: String,
      content_type: String,
    },
    {
      url: String,
      content_type: String,
    },
    {
      url: String,
      content_type: String,
    },
    {
      url: String,
      content_type: String,
    },
  ],

});

const Property = mongoose.model('Property', PropertySchema);
module.exports = { Property };
