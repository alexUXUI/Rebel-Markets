var express = require('express');
var router = express.Router();
var db = require('knex');
var knex = require('../db/knex');

/* GET users listing. */
router.post('/adduser', function(req, res, next) {
  knex('users').insert({
    username: req.body.username,
    photo_url: req.body.photo_url,
    blurb: req.body.blurb,
    causes: req.body.causes,
    password: req.body.password,
  }).then(function(){
    res.send('respond with a resource');
  })
});

module.exports = router;
