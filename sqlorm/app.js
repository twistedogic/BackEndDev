var anydbsql = require('anydb-sql');

var db = anydbsql({
    url: 'mysql://express:express@localhost:3306/db1'
});
var user = db.define({
    name: 'raw1',
    columns: {
        id: {primaryKey: true}, 
        Symbol  : {},
        Dateno  : {},
        Open    : {},
        High    : {},
        Low     : {},
        Close   : {},
        Volume  : {}
    }
});

