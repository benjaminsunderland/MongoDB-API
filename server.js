const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const db = require('./config/db');

MongoClient.connect(
  'mongodb://mm_recruitment_user_readonly:rebelMutualWhistle@ds037551.mongolab.com:37551/mm-recruitment',
  function(err, database) {
    if (err) return console.log(err);
    db = database;
    app.listen(3050, function() {
      console.log('connected to mongoDB');
    });
  }
);

app.listen(3000, function() {
  console.log('listening on 3050');
});

app.get('/', function(req, res) {
  res.sendFile(
    '/Users/nero/Documents/MakersProjects/MongoDB-API' + '/index.html'
  );
  var company = db.collection('company').find();
  console.log(company);
});
