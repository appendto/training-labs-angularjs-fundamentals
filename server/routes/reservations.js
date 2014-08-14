var express = require('express'),
    reservations = express.Router(),
    Reservation = require('../db/models/reservation');

// GET '/reservations/'
reservations.get('/', function(req, res, next) {
    Reservation.findAll()
        .then(function(reservations) {
            res.json(reservations);
        });
});

// GET '/reservations/'
reservations.get('/:id', function(req, res, next) {
    Reservation.find(req.params.id)
        .then(function(reservations) {
            if (!reservations) {
                res.statusCode = 404;
                return res.send('Not found');
            }
            res.json(reservations);
        });
});

// POST '/reservations/'
reservations.post('/', function(req, res, next) {
    Reservation.create({
            name: req.body.name,
            time: req.body.time,
            qty: req.body.qty
        })
        .success(function(reservations) {
            res.statusCode = 201;
            res.json(reservations);
        });
});

// PUT '/reservations/:id'
reservations.put('/:id', function(req, res, next) {
    var keys = Object.keys(req.body),
        update = {};

    keys.forEach(function(key) {
        update[key] = req.body[key];
    });
    Reservation.update(update, {
            id: req.params.id
        })
        .success(function(reservations) {
            res.statusCode = 204;
            res.json();
        });
});

// DELETE '/reservations/:id'
reservations['delete']('/:id', function(req, res, next) {
    Reservation.destroy({
            id: req.params.id
        })
        .success(function(deleted) {
            if (!deleted) {
                res.statusCode = 404;
                return res.send('Not found');
            }

            res.json({
                success: true
            });
        });
});

module.exports.reservations = reservations;