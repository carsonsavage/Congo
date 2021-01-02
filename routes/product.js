let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Products = require('../models/products.js');

/* GET ALL PRODUCTS */
router.get('/', function(req, res, next) {
  Products.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* GET SINGLE PRODUCTS BY ID */
router.get('/:id', function(req, res, next) {
  Products.findById(req.params.id, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* SAVE PRODUCTS */
router.post('/', function(req, res, next) {
  Products.create(req.body, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* UPDATE PRODUCTS */
router.put('/:id', function(req, res, next) {
  Products.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* DELETE PRODUCTS */
router.delete('/:id', function(req, res, next) {
  Products.findByIdAndRemove(req.params.id, req.body, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

module.exports = router;