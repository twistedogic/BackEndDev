var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'expressmysql'
    },
    port: 3000,
    db: 'mysql://express:express@localhost/db1'
  },

  test: {
    root: rootPath,
    app: {
      name: 'expressmysql'
    },
    port: 3000,
    db: 'mysql://root@localhost/expressmysql_test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'expressmysql'
    },
    port: 3000,
    db: 'mysql://root@localhost/expressmysql_production'
  }
};

module.exports = config[env];
