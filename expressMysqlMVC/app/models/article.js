// Example model

var db = require('orm').db;

var testTable = db.define("raw1", {
        Symbol  : { type: "number", rational: false, unique: false },
        Dateno  : { type: "number", rational: false, unique: true },
        Open    : { type: "number", rational: false, unique: false },
        High    : { type: "number", rational: false, unique: false },
        Low     : { type: "number", rational: false, unique: false },
        Close   : { type: "number", rational: false, unique: false },
        Volume  : { type: "number", rational: false, unique: false }
    }, {
        methods: {
            showHigh: function () {
                return this.High;
            },
            showOpen: function () {
                return this.Open;
            },
            showLow: function () {
                return this.Low;
            },
            showClose: function () {
                return this.Close;
            },
            showVolume: function () {
                return this.Volume;
            },
            showID: function () {
                return this.id;
            }

        },
        validations: {
            // age: orm.enforce.ranges.number(18, undefined, "under-age")
        }
    });

    testTable.find({ id: 2047,id: 2051, id: 2053}, function (err, data) {

        console.log("Record %d found.", data.length);
        for (var i = 0; i < data.length; i++)
        {
            console.log("%s,%s,%s,%s,%s,%s", data[i].showID(), data[i].showHigh(), data[i].showOpen(), data[i].showLow(), data[i].showClose(), data[i].showVolume());
        }
    });