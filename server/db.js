
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fecphotos');


let PropertySchema = mongoose.Schema({
  property_id: Number,
  dining: {
    dining_url: String,
    content_type: String,
  },
  bedroom: {
    bedroom_url: String,
    content_type: String,
  },
  bathroom: {
    bathroom_url: String,
    content_type: String,
  },
  kitchen: {
    kitchen_url: String,
    content_type: String,
  },
});

const Property = mongoose.model('Property', PropertySchema);
module.exports = { Property };
