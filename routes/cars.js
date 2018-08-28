var express = require('express');
var router = express.Router();
var Car = require('../models').Car;

//GET car listings
router.get('/', function(req, res) {
    Car.all({
        order: [
            ['createdAt', 'ASC']
        ]
    })
    .then( function(cars) {
        return res.render('cars', { cars: cars });
    })   
});

//POST add car listing
router.post('/', function(req, res) {
    var title = req.body.title;
    Car.create({ title: title })
    .then( function() {
        res.redirect('/cars');
    });
});

router.delete('/:id', function(req, res) {
    Car.findById(req.params.id)
    .then( function(car) {
        car.destroy()
    })
    .then( function() {
        return res.redirect('/cars');
    });
});

router.get('/:id/edit', function(req, res) {
    Car.findById(req.params.id)
    .then( function(car) {
        return res.render('edit', { car: car });
    });
});

router.put('/:id', function(req, res) {
    Car.update(
        { title: req.body.title },
        { where: { id: req.params.id } }
    )
    .then( function() {
        return res.redirect('/cars');
    });
});



module.exports = router;