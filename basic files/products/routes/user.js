let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = require('../models/user.js');

/* GET ALL USER */
router.get('/', function(req, res, next) {
  User.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* GET SINGLE USER BY ID */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* SAVE USER */
router.post('/', function(req, res, next) {
  User.create(req.body, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* UPDATE USER */
router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* DELETE PRODUCTS */
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

module.exports = router;
