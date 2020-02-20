var projects = require('../projects.json');
/*
 * GET home page.
 */

exports.view = function(request, response){
  	response.render('index', projects);
    projects["viewAlt"] = false;
    console.log(projects.viewAlt);
};

exports.viewAlt = function(request, response){
  	response.render('index', projects);
    projects["viewAlt"] = true;
    console.log(projects.viewAlt);
};
