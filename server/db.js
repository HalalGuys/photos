
let mongoose = require('mongoose');
const storage = require('./datageneration.js').storage

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

let Property = mongoose.model('Property',PropertySchema);

Property.insertMany(storage, function (error,res){
  if (error) throw error;
  console.log('Inserted Photos')
});

let getPhoto = (callback, id) => {
  let query = {};
  query['property_id'] = id;

  Property.
    find(query).
    exec(callback);

};

module.exports= { getPhoto };
