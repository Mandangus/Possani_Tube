let mongoclient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/'
var db;
mongoclient.connect(url, function(err, client) {
    if (err) console.log(err)
    db = client.db('myapp')
})

module.exports = db;