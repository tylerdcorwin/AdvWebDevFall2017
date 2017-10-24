var express = require('express');
var router = express.Router();
var ctrlHome = require('./review.controller');//points to review.controller.js

//by setting 2 differnt versions of ctrlHome.home, we make it so both url's will
//re-direct to the index page
router.all('/', ctrlHome.home);
router.all('/index', ctrlHome.home);
router.all('/update/:id?', ctrlHome.update); //the ? makes the param of id optional
router.all('/delete/:id?', ctrlHome.delete); //added delete page
router.all('/view/:id?', ctrlHome.view);
//handle the request messages inside the functions

module.exports = router;
