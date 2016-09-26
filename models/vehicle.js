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
  type: String,
  make: String,
  model: String,
  mpg: Number,
  vin: String,
  model_year: Number,
  price: Number,
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
