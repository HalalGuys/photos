const Property = require('./db.js').Property;

let getPhoto = (callback, id) => {

    let query = {};
    query['property_id'] = id;
    console.log('property', Property)
    Property.
      find(query).
      exec(callback);
  
  };


module.exports= { getPhoto };
