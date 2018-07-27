var mongoose = require('mongoose');
var storage = require('./datageneration.js').storage
mongoose.connect('mongodb://localhost/fecphotos');

var PropertySchema = mongoose.Schema({
        property_id: Number,
        dining:{
            dining_url: String,
            content_type: String
        },
        bedroom:{
            bedroom_url: String,
            content_type: String
        },
        bathroom:{
            bathroom_url: String,
            content_type: String
        },
        kitchen:{
            kitchen_url: String,
            content_type: String
        },
    
});

var Property = mongoose.model('Property',PropertySchema);

Property.insertMany( storage, function (error,res){
      if (error) throw error;
      console.log('Inserted Photos')
  });

let getPhoto = (callback) => {  

    Property.
    find({ property_id: 1 }).
    exec(callback)
   
   

}
 
 module.exports= {getPhoto};