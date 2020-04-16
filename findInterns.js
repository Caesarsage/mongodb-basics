var assert = require('assert');

var findDocument = function (db,callback) {
    
    var collection = db.collection('myMovies');
    //Find first Document
    collection.findOne({},function (err, res) {
        assert.equal(err,null);
        console.log("Find and Return of the First Document")
        callback(res)
        console.log(res);
    });

    // find movie with rating of 7
    collection.find({rating : 7 }).toArray(function (err, res) {
        assert.equal(err,null);
        console.log("Find and return of movies with rating of 7")
        callback(res);
        console.log(res);
    }); 


    //use project obj to return only movies title
    collection.find({}, {projection : { _id:0, movie :1} }).toArray(function (err, res) {
        assert.equal(err,null);
        console.log("Find and Returns of only movies title ")
        console.log(res);
        callback(res);
    }); 

};
module.exports = findDocument;