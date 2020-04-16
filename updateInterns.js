var assert = require('assert');

var updateDocument = function (db,callback) {
    
    var collection = db.collection('myMovies');

    //update Document
    collection.updateOne(
        { movie: 'The Banker'}, 
        {$set: {movie:"The Blacklist", year :'2015', rating: '10'}}, 
        function (err,res) {
        //    assert.equal(err, null);
            console.log("FIRST Movie Updated")
        //    console.log(res)
            callback(res)
        }
    );
      
    //Check for updates
    collection.find({}).toArray(function (err, res) {
        assert.equal(err,null);
        console.log("Find all new Document")
        console.log(res);
        callback(res)
    });
   
};
module.exports = updateDocument;