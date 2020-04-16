var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var insertDocument = require('./interns');
var findDocument = require('./findinterns');
var updateDocument = require('./updateInterns');

//Connection URL
var url = 'mongodb://localhost:27017';

//Create new Mongoclient
var client = new mongoClient(url);

//Name OF DB
var name ='Caesarsage'

client.connect(function(err){
    assert.equal(err, null);
    console.log('Database created by ' + name );

    var db = client.db(name);

    updateDocument(db,function () {
        client.close();     
    });
});
