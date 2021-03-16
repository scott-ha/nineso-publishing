var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/compare', function(req, res, next) {
  res.render('compare', { title: 'Express' });
});

router.get('/product_detail', function(req, res, next) {
  res.render('product-detail', { title: 'Express' });
});

router.get('/product-big', function(req, res, next) {
  res.render('product-big', { title: 'Express' });
});

router.get('/product-medium', function(req, res, next) {
  res.render('product-medium', { title: 'Express' });
});

router.get('/product-small', function(req, res, next) {
  res.render('product-small', { title: 'Express' });
});

module.exports = router;
