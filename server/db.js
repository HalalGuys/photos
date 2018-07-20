var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fecphotos');

var PropertySchema = mongoose.Schema(
    {
        img_url: String,
        content_type: String
    }
  );

var Property = mongoose.model('Property',PropertySchema);


Property.insertMany({ img_url: 'https://s3.amazonaws.com/fecphotobucket/Kitchen/kitchen1.jpg',
                    content_type: 'Bathroom1'}, function (error,res){
                        if (error) throw error;
                        console.log('Inserted Photos')
});

let getPhoto = (callback) =>{  

    Property.
    find({ content_type: "Bathroom1" }).
    exec(callback)
   
   

}
 
 module.exports= {getPhoto};