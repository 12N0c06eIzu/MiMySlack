const express = require('express')
const app = express()

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var workspaceRouter = require('./routes/workspaces');
var spaceRouter = require('./routes/spaces');
var userRouter = require('./routes/users');
var threadRouter = require('./routes/threads');
var commentRouter = require('./routes/comments');
var authRouter = require('./routes/auth');

// app.use(cors());
// api
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/workspaces', workspaceRouter);
app.use('/spaces', spaceRouter);
app.use('/users', userRouter);
app.use('/threads', threadRouter);
app.use('/comments', commentRouter);
app.use('/auth', authRouter);


app.use('/img', express.static(__dirname + '/dist/img/'));
app.use('/css', express.static(__dirname + '/dist/css/'));
app.use('/js', express.static(__dirname + '/dist/js/'));
app.get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
  module.exports = app;
  