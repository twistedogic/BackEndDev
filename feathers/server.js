var feathers = require('feathers');
var TodoService = require('./todos');
 
feathers().configure(feathers.socketio())
  .use(feathers.static(__dirname))
  .use('/todos', new TodoService())
  .listen(8080);
