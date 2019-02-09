var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('seccion detalle');
  res.render('detalle', { title: 'Detalle' });
});

module.exports = router;
