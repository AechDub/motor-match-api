var mongoose = require('mongoose')

var schemaOptions = {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
}

var vehicleSchema = new mongoose.Schema({
  vehicle_type: {
    type: String
  },
  vehicle_make: {
    type: String
  },
  vehicle_model: {
    type: String
  },
  mpg: {
    type: Number,
    default: 0
  },
  vin: {
    type: String
  },
  price: {
    type: Number,
    default: 0
  },
  created: {
    type : Date,
    default : Date.now
  },
  modified: {
    type: Date
  }
}, schemaOptions)

vehicleSchema.virtual('id').get(function () {
  return this._id
})

module.exports = mongoose.model('Vehicle', vehicleSchema)
