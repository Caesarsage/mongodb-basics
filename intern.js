var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';
mongoClient.connect(url,function (err,db){
    if (err) throw err;
    //creating collection with name interns
    var dbc = db.db("interns");
    dbc.createCollection("interns", function (err, res) {
        if (err) throw err
        console.log("interns collection created")    
        db.close();
    });   
});
