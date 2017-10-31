var mongoose = require('mongoose');
var reviewSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: [true, 'First Name is required']
    },
    lName:{
        type: String,
        required: [true, 'Last Name is required']
    },
    department: String,
    startDate:{
        type: Date,
        "default": Date.now
    },
    jobTitle: {
      type: String,
      required: [true, 'Job Title is required']
    },
    salary: {
      type: Number,
      required: true,
      min: 0,
      max: 10000000
    }
});

var Review = mongoose.model('Review', reviewSchema); //may have to change this when changing the database in db.js

module.exports = Review;
