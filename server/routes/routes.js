'use strict';
// const User = require('../model/user/user.js');

module.exports = function(app,passport){
  app.get('/login/twitter', passport.authenticate('twitter'));

  app.get('/login/twitter/return', passport.authenticate('twitter', {
    successRedirect: '/dashboard',
    failureRedirect: '/'
  }));

  // router.get('/app/tweets', (req,res) => {
  //
  // });
}
