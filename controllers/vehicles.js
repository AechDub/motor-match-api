var express = require('express')
var router = express.Router()
var Vehicle = require('../models/vehicle')
var _ = require('lodash')

router.get('/v1/vehicles', function (req, res) {
  Vehicle
    .find()
    .exec(function (err, vehicles) {
      if (err) return console.error(err)
      var data = {
        results: vehicles
      }
      res.send(data)
    })
})

router.get('/v1/vehicles/:vin', function (req, res) {
  Vehicle
    .find({vin: req.params.vin})
    .exec(function (err, vehicle) {
      if (err) return console.error(err)
      var data = {
        results: vehicles
      }
      res.send(data)
    })    
})

router.post('/v1/vehicles', function (req, res) {
    var vehicle = new Vehicle(req.body)
    vehicle.save(function (err, vehicle) {
      if (err) return console.error(err)
      res.send(vehicle)
    })
})

router.patch('/v1/vehicles/:id', function (req, res) {
  Vehicle.findById(req.params.id, function (err, vehicle) {
    if (err) return console.error(err)
    vehicle.modified = new Date()
    _.merge(vehicle, req.body)
    vehicle.save(function (err) {
      if (err) return console.error(err)
      res.send(vehicle)
    })
  })
})

router.delete('/v1/vehicles/:id', function (req, res) {
  Vehicle.findById(req.params.id, function (err, vehicle) {
    if (err) return console.error(err)
    vehicle.remove(function (err) {
      if (err) return console.error(err)
      res.sendStatus(200)
    })
  })
})

module.exports = router
