
var debug = require('debug')('demo:queryHandler');

function search(query) {
    debug('search setup');
    var where = {};
    var key;
    for (key in query) {
      if (key.indexOf('_') === -1) {
          where[key] =  { $regex: new RegExp('.*?'+ query[key].replace(/[\W_]+/g,'') +'.*') };
      }
    }
    return where;
}

function sort(query) {
    debug('sort setup');
    var options = {};
    options.sort = null;
    if (query._sort) {
        var prefix = 1;
        if (query._sort.match(/-/)) prefix = -1;
        var field = query._sort.replace(/-|\s/g, '');
        options.sort = {};
        options.sort[field] = prefix;
    }
    return options.sort;
}

//new fucntion for cors
//this is middleware that has a fucntion between the two progams and gets added to the program
module.exports.cors = function(reg, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    next();
};

module.exports.search = function () {
  return function (req, res, next) {
    // Add the search functionality to the request object
    req.where = search(req.query); //this returns the json object 'test' from the hardcoded example
    next();
  };
};

module.exports.sort = function () {
  return function (req, res, next) {
    // Add the options sort functionality to the request object
    if (!req.options) req.options = {};
    req.options.sort = sort(req.query);
    next();
  };
};
