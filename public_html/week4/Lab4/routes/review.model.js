var mongoose = require('mongoose');
//The schema is what each json document needs in order to run
var reviewSchema = new mongoose.Schema({
    author: {
        type: String, //Capital S like java
        required: [true, 'Author is required']
    },
    rating: {
        type: Number,
        required: true, //no error message needed, becuase this is set to true
        min: 0,
        max: 5 //can create custom error message by doing something like below
        //max: [5, 'Max Rating is 5']
    },
    reviewText: String, //if there are no other options you can just set the json type here
    createdOn: {
        type: Date,
        "default": Date.now //automatic date insert with this
    }
});

var Review = mongoose.model('Review', reviewSchema); //may have to change this when changing the database in db.js

module.exports = Review; //built in node command to build javascript classes
//so now we can use the actual variable Review to get the db
