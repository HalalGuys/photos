const base = 'https://s3.amazonaws.com/fecphotobucket/';

let random = Math.floor(Math.random() * 5) + 1;

let dining = `${base}Dining/dining`;

let bedroom = `${base}Bedrooms/bedroom`;

let bathroom = `${base}Bathrooms/bathroom`;

let kitchen = `${base}Kitchen/kitchen`;

let storage = [];

for (let i = 1; i < 101; (i += 1)) {
  let randomDin = Math.floor(Math.random() * 5) + 1;
  let randomBed = Math.floor(Math.random() * 5) + 1;
  let randomBath = Math.floor(Math.random() * 5) + 1;
  let randomKit = Math.floor(Math.random() * 5) + 1;

  storage.push(
    {
      property_id: i,
      dining: {
        dining_url: `${dining}${randomDin}.jpg`,
        content_type: 'dining',
      },
      bedroom: {
        bedroom_url: `${bedroom}${randomBed}.jpg`,
        content_type: 'bedroom',
      },
      bathroom: {
        bathroom_url: `${bathroom}${randomBath}.jpg`,
        content_type: 'bathroom',
      },
      kitchen: {
        kitchen_url: `${kitchen}${randomKit}.jpg`,
        content_type: 'kitchen',
      },
    },
  );
}

console.log('sam might not come dataGen......')
module.exports = { storage };
