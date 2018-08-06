const mongoose = require('mongoose');

const Property = require('./db').Property;


const base = 'https://s3.amazonaws.com/fecphotobucket/';

const dining = `${base}Dining/dining`;

const bedroom = `${base}Bedrooms/bedroom`;

const bathroom = `${base}Bathrooms/bathroom`;

const kitchen = `${base}Kitchen/kitchen`;

const storage = [];

for (let i = 1; i < 101; (i += 1)) {
  const randomDin = Math.floor(Math.random() * 5) + 1;
  const randomBed = Math.floor(Math.random() * 5) + 1;
  const randomBath = Math.floor(Math.random() * 5) + 1;
  const randomKit = Math.floor(Math.random() * 5) + 1;

  storage.push(
    {
      property_id: i,
      photos: [
        {
          url: `${dining}${randomDin}.jpg`,
          content_type: 'dining',
        },
        {
          url: `${bedroom}${randomBed}.jpg`,
          content_type: 'bedroom',
        },
        {
          url: `${bathroom}${randomBath}.jpg`,
          content_type: 'bathroom',
        },
        {
          url: `${kitchen}${randomKit}.jpg`,
          content_type: 'kitchen',
        },
      ],
    },
  );
}


Property.insertMany(storage, function (error,res) {
  if (error) throw error;
  mongoose.connection.close();
});
