var nconf = require('nconf'),
  defaults = require('./config/defaults.json');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//load configuration
nconf.env();
nconf.file({
  file: __dirname + '/config/' + nconf.get('NODE_ENV') + '.json'
});
nconf.defaults(defaults);

module.exports = nconf;