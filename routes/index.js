var express = require('express');
var router = express.Router();
var moment = require('moment');
var mongodb = require('mongodb').MongoClient;

/* GET home page. */
router.get('/home', function (req, res, next) {
  mongodb.connect('mongodb://admin:1234@ds253879.mlab.com:53879/students_record', function (err, db) {
    var collection = db.collection('pdf_students_collection')
    collection.findOne({ 'EnrollmentNo': '05276803115' }, function (err, result) {
      if (result) {
        res.render('index', { title: result , moment: moment })
      }
      if (err) {
        console.log(err)
      }
    })
  })
});

module.exports = router;
