// Require ORM.
var orm = require('../config/orm.js');

module.exports = {
    // Makes a request for data to ORM selectAll
    all: function(callback) {
        orm.selectAll('burgers', 'id', 'DESC', function(data) {
            callback(data);
        });
    },
    //  Makes a request to create to ORM insertOne.
    post: function(input, callback) {
        var columns = '(burger_name, devoured)';
        var values = '\'' + input + '\', false';

        // Gives query parameters to ORM function.
        orm.insertOne('burgers', columns, values, function(data) {
            callback(data);
        });
    },
    // Makes a request to update status of burger to ORM updateOne.
    update: function(property, selector, callback) {

        var update = 'devoured = ' + property;
        var condition = 'id = ' + selector;

        // Gives query parameters to ORM function.
        orm.updateOne('burgers', update, condition, function(data) {
            callback(data);
        });
    }
};