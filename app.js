var express = require('express')
var app = express()
var mongoose = require('mongoose')
var http = require('http')
var fs = require('fs')
var bodyParser = require('body-parser')
var port = process.env.PORT || 1337
var VehiclesController = require('./controllers/vehicles')
var HomeController = require('./controllers/home')
var logger = require('./middlewares/logger')
var headers = require('./middlewares/headers')


// ----------------------------------------------------------------------
// view engine setup
// ----------------------------------------------------------------------

app.set('views', './views')
app.set('view engine', 'ejs')

// ----------------------------------------------------------------------
// mongoose
// ----------------------------------------------------------------------

mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/test')

var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

// ----------------------------------------------------------------------
// middlewares
// ----------------------------------------------------------------------

app.use(bodyParser.json())
app.use(logger)
app.use(headers)

// ----------------------------------------------------------------------
// controllers
// ----------------------------------------------------------------------

app.use('', HomeController)
app.use('/api', VehiclesController)

// ----------------------------------------------------------------------
// create server
// ----------------------------------------------------------------------

if (!process.env.PORT) {
  http.createServer(app).listen(port, function () {
    console.log('motormatch listening on port ' + port)
  })
} else {
  app.listen(port, app, function () {
    console.log('motormatch listening on port ' + port)
  })
}
