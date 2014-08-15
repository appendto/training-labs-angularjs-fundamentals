var express = require('express'),
    items = express.Router(),
    MenuItem = require('../db/models/menuItem');

// GET '/items/'
items.get('/', function(req, res, next) {
    MenuItem.findAll()
        .then(function(items) {
            res.json(items);
        });
});

// GET '/items/'
items.get('/:id', function(req, res, next) {
    MenuItem.find(req.params.id)
        .then(function(items) {
            if (!items) {
                res.statusCode = 404;
                return res.send('Not found');
            }
            res.json(items);
        });
});

// POST '/items/'
items.post('/', function(req, res, next) {
    MenuItem.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        })
        .success(function(items) {
            res.statusCode = 201;
            res.json(items);
        });
});

// PUT '/items/:id'
items.put('/:id', function(req, res, next) {
    var keys = Object.keys(req.body),
        update = {};

    keys.forEach(function(key) {
        update[key] = req.body[key];
    });
    MenuItem.update(update, {
            id: req.params.id
        })
        .success(function(items) {
            res.statusCode = 204;
            res.json();
        });
});

// DELETE '/items/:id'
items['delete']('/:id', function(req, res, next) {
    MenuItem.destroy({
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

module.exports.items = items;