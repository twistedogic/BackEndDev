var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://express:express@localhost/db1');
sequelize.query("SELECT * FROM raw1 WHERE id > 3699 and id < 0").success(function(myTableRows) {
  console.log(myTableRows);
});