var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';
var name ='Caesarsage'

mongoClient.connect(url,function (err,db){
    if (err) throw err;
        console.log('Database created by ' + name);
        db.close();    
});