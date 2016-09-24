var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {title: 'motormatch'})
})

// Create ability to modify data set?
router.get('/admin', function (req, res) {
  res.render('admin', {msg: ''})
})

module.exports = router
