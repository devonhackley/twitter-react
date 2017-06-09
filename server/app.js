'use strict'
 require('dotenv').load();

const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const PORT = process.env.PORT ||3000;
// const App = require('./app/entry.js');

const app = express();

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;



// app.use(cors());
app.use('/public', express.static('./public'));


app.use((err,req,res,next) => {
  console.err(err.message);
  if(err.status){
    return res.sendStatus(err.status);
  }
  res.sendStatus(500);
  next();
});

app.get('*', (req,res) => res.sendFile(path.join(__dirname, '../public', 'index.html')));


app.use(session({ secret: 'devisthename', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session())

require('./configs/passport-config.js')(passport);
// app.use(require('./routes/routes.js'))(app, passport);
app.get('/login/twitter', passport.authenticate('twitter'));

app.get('/login/twitter/return', passport.authenticate('twitter', {
  successRedirect: '/dashboard',
  failureRedirect: '/'
}));


app.listen(PORT, () => {
  console.log('Server is running on port: ', PORT)
})

module.exports = app;
