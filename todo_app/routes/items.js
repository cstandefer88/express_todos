var express = require('express');
var router = express.Router();
var Item = require('../models/item');



router.get('/', function(req, res, next) {
  res.render('index', {items: Item.all});
});


router.post('/', function(req, res, next) {
  new Item(req.body);
  res.redirect('/');
})


// router.get('/', function(req, res, next) {
//     res.render('index');
// });





module.exports = router
