var Review = require('./review.model');
var debug = require('debug')('demo:review');
module.exports.home = function(req, res) {
  if (req.method === 'POST') {
    var msg = '';
    req.checkBody("fname", "Please enter a first name").notEmpty();
    req.checkBody("lname", "Please enter a last name").notEmpty();;
    req.checkBody("department", "Please enter a department").notEmpty();
    req.checkBody("startDate", "Please enter a start date").notEmpty();
    req.checkBody("jobTitle", "Please enter a job title").notEmpty();
    req.checkBody("salary", "Please enter a salary").notEmpty();    
    var errors = req.validationErrors();
    console.log(errors);
    Review.create({
        fName: req.body.fname,
        lName: req.body.lname,
        department: req.body.department,
        startDate: req.body.startDate,
        jobTitle: req.body.jobTitle,
        salary: req.body.salary
      })
      .then(function() {
        msg = 'Employee was Saved';
        return;
      })
      .catch(function(err) {
        msg = 'Employee was not Saved';
        return err.message;
      }).then(function(err) {
        res.render('index', {
          title: 'Employee',
          message: msg,
          errors: errors
        });
      });
  } else {
    res.render('index', {
      title: 'New Employee',
      message: ''
    });
  }
};

module.exports.view = function(req, res) {
  Review
    .find()
    .exec()
    .then(function(results) {
      res.render('view', {
        title: 'View Employee',
        results: results
      });
    });
};

module.exports.delete = function(req, res) {
  var id = req.params.id,
    removed = 'ID was not found';
  if (id) {
    Review.remove({
        _id: id
      })
      .then(function() {
        removed = `${id} has been removed`;
        finish();
      })
      .catch(function(err) {
        removed = `${id} has not been removed`;
        finish();
      });
  } else {
    finish();
  }

  function finish() {
    res.render('delete', {
      title: removed
    });
  }
};

module.exports.update = function(req, res) {
  var id = req.params.id;
  var msg = '';
  if (req.method === 'POST') {
    id = req.body._id;
    Review
      .findById(id)
      .exec()
      .then(function(reviewData) {
        reviewData.fName = req.body.fname;//Because fName has a Capital in
        reviewData.lName = req.body.lname;//the db, it needs to follow here
        reviewData.department = req.body.department;
        reviewData.startDate = req.body.startDate;
        reviewData.jobTitle = req.body.jobTitle;
        reviewData.salary = req.body.salary;
        return reviewData.save();
      })
      .then(function() {
        msg = 'data has been updated';
        finished();
      })
      .catch(function() {
        msg = 'data has NOT been updated';
        finished();
      });
  } else {
    finished();
  }

  function finished() {
    Review
      .findOne({
        '_id': id
      })
      .exec()
      .then(function(results) {
        res.render('update', {
          title: 'Update Results',
          message: msg,
          results: results
        });
      })
      .catch(function() {
        res.render('notfound', {
          message: 'Sorry ID not found'
        });
      });
  }
};
