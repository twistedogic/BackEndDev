var anydbsql = require('anydb-sql');

var db = anydbsql({
    url: 'mysql://express:express@localhost:3306/db1'
});
var test = db.define({
    name: 'raw1',
    columns: ['id', 'Symbol', 'Dateno', 'Open', 'High', 'Low', 'Close', 'Volume' ]
});
var query = test
    .select('*')
    .from(test)
    .where(
      test.Dateno.gt(19950720)
    ).and(
      test.Dateno.lt(19950722)
    );
console.dir(query.toQuery().text);
query.all(function(err, data) {
    console.dir(data);
});
db.close();