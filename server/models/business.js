/*
Name: Maksat Dushanov
ID: 301258269
Mail: mdushano@my.centennialcollege.ca
Course: COMP229
*/
let mongoose = require('mongoose');
let businessModel = mongoose.Schema({
    name: String,
    number: Number,
    address: String
}, {
    collection: "businesss"
});

module.exports = mongoose.model('Business', businessModel);