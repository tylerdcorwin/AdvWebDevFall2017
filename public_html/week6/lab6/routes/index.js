var express = require('express');
var router = express.Router();
var ctrlReviews = require('./review.controller');

// reviews
router.get('/Employee', ctrlReviews.reviewsReadAll);
router.get('/Employee/:reviewid', ctrlReviews.reviewsReadOne);
router.post('/Employee', ctrlReviews.reviewsCreate);
router.put('/Employee/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/Employee/:reviewid', ctrlReviews.reviewsDeleteOne);


module.exports = router;
