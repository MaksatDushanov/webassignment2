/*
Name: Maksat Dushanov
ID: 301258269
Mail: mdushano@my.centennialcollege.ca
Course: COMP229
*/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let Business = require('../models/business');

module.exports.displayBusinessList = (req, res, next) => {
    Business.find((err, businessList) => {
        if (err) {
            return console.error(err);
        } else {
            //console.log();

            res.render('business/list', {
                title: 'Businesss',
                BusinessList: businessList,
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('business/add', {
        title: 'Add Business',
        displayName: req.user ? req.user.displayName : ''
    })
}

module.exports.processAddPage = (req, res, next) => {
    let newBusiness = Business({
        "name": req.body.name,
        "number": req.body.number,
        "address": req.body.address
    });

    Business.create(newBusiness, (err, Business) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            // refresh the  list
            res.redirect('/business-list');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Business.findById(id, (err, businessToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //show the edit view
            res.render('business/edit', {
                title: 'Edit Business',
                business: businessToEdit,
                displayName: req.user ? req.user.displayName : ''
            })
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedBusiness = Business({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "address": req.body.address
    });

    Business.updateOne({ _id: id }, updatedBusiness, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            // refresh the  list
            res.redirect('/business-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Business.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            // refresh the  list
            res.redirect('/business-list');
        }
    });
}