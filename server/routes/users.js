/*
Name: Maksat Dushanov
ID: 301258269
Mail: mdushano@my.centennialcollege.ca
Course: COMP229
*/
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Placeholder');
});

module.exports = router;