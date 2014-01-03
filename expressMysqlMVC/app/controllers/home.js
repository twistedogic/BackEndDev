var db = require('orm').db,
  testTable = db.models.rawData;

exports.index = function(req, res){
  testTable.find(function(err, Dateno){
    if(err) throw new Error(err);
    res.render('home/index', {
      title: 'Generator-Express MVC',
      articles: Dateno
    });
  });
};
