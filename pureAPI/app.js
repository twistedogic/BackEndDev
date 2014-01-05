
/**
 * Module dependencies.
 */

var express = require('express'),
    Sequelize = require('sequelize'),
    routes = require('./routes'),
    http = require('http'),
    path = require('path');

var app = express();
var db = new Sequelize('mysql://express:express@localhost/db1');


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// app.get('/', routes.index);
app.get('/data', function(req, res){
  db.query("SELECT * FROM raw1 WHERE id < 3073").success(function(myTableRows) {
    console.log(myTableRows);
    res.json(myTableRows);
    return;
  }); 
});


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
