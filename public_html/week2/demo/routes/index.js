//this is the controller page that puts everyting together, the express title is sent to the
//index.pug file that is then displayed when the server is running
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tyler', msg: 'hello how are you?' }); //changes the title on the page localhost:3000
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Tyler'}); //changes the title on the page localhost:3000
});

router.post('/form', function(req, res, next) {
  res.render('form', { title: req.body.email}); //email can be changed to whatever the input is on the page
});

module.exports = router;
