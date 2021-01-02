let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Orders = require('../models/orders.js');

/* GET ALL ORDERS */
router.get('/', function(req, res, next) {
  Orders.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* GET SINGLE ORDERS BY ID */
router.get('/:id', function(req, res, next) {
  Orders.findById(req.params.id, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* SAVE ORDERS */
router.post('/', function(req, res, next) {
  Orders.create(req.body, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* UPDATE ORDERS */
router.put('/:id', function(req, res, next) {
  Orders.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* DELETE PRODUCTS */
router.delete('/:id', function(req, res, next) {
  Orders.findByIdAndRemove(req.params.id, req.body, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

module.exports = router;
