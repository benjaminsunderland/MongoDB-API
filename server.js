const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const request = require('request');
app.set('view engine', 'ejs');

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

app.get('/', function(req, res) {
  request(
    {
      url: 'http://mm-recruitment-stock-price-api.herokuapp.com/company/MSFT',
      json: true
    },
    function(error, response, body) {
      db
        .collection('company')
        .find()
        .toArray(function(err, results) {
          if (err) return console.log(err);
          res.render('index.ejs', {
            company: results,
            latestPrice: body.latestPrice
          });
        });
    }
  );
});

app.get('/body', function(req, res) {
  request(
    {
      url: 'http://mm-recruitment-story-feed-api.herokuapp.com/4934',
      json: true
    },
    function(error, response, hash) {
      if (error) return console.log(error);
      console.log(hash[0].body);
      res.render('index2.ejs', { test: hash[0].body });
    }
  );
});
