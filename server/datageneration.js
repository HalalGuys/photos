

var base = 'https://s3.amazonaws.com/fecphotobucket/';

var random = Math.floor(Math.random()*5) + 1

var dining = `${base}Dining/dining`

var bedroom = `${base}Bedrooms/bedroom`

var bathroom = `${base}Bathrooms/bathroom`

var kitchen = `${base}Kitchen/kitchen`

var storage = [];


for( var i = 1; i < 101; i ++){
    var randomDin =  Math.floor(Math.random()*5) + 1;
    var randomBed = Math.floor(Math.random()*5) + 1;
    var randomBath = Math.floor(Math.random()*5) + 1;
    var randomKit = Math.floor(Math.random()*5) + 1;

    storage.push(
    { 
        property_id: i,
        dining:{
            dining_url: `${dining}${randomDin}.jpg`,
            content_type: 'dining',
        },
        bedroom:{
            bedroom_url: `${bedroom}${randomBed}.jpg`,
            content_type: 'bedroom'
        },
        bathroom:{
            bathroom_url: `${bathroom}${randomBath}.jpg`,
            content_type:'bathroom'
        },
        kitchen:{
            kitchen_url: `${kitchen}${randomKit}.jpg`,
            content_type: 'kitchen'
        }
    
    });
    


}

console.log(storage.length);

module.exports = {storage};