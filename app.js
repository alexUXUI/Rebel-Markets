var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('dotenv').load();
var db = require('knex');
var knex = require('./db/knex');
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("./client"));

app.use('/', routes);
app.use('/users', users);

app.get('/mainpage', function(req, res, next){
	knex('users').select().then(function(data){
		console.log('sending back user data');
		res.status(200).json({data: data})
	})
})

app.post('/adduser', function(req, res, next) {
  knex('users').insert({
    username: req.body.username,
    photo_url: req.body.photo_url,
    blurb: req.body.blurb,
    causes: req.body.causes,
    password: req.body.password,
  }).then(function(id){
    var id = id.id;
    console.log('this is the users id', id);
    res.redirect('/#/primary' + id);
  })
});

app.post('/addcollection', function(req, res, next){
  knex('collections').insert({
    title: req.body.title,
    description: req.body.description,
    photo: req.body.photo,
    music: req.body.music,
    link: req.body.link,
    causes: req.body.causes,
    forsale: req.body.forsale,
  }).then(function(){
    res.redirect("/#/primary")
  })
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;
