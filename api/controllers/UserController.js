module.exports = {

  /**
   * `UserController.login()`
   */
  login: function (req, res) {

    // See `api/responses/login.js`
    return res.login({
      emailAddress: req.param('emailAddress'),
      password: req.param('password'),
      successRedirect: '/index',
      invalidRedirect: '/signup'
    });
  },


  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {

    // "Forget" the user from the session.
    // Subsequent requests from this user agent will NOT have `req.session.me`.
    req.session.me = null;

    // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
    // send a simple response letting the user agent know they were logged out
    // successfully.
    if (req.wantsJSON) {
      return res.ok('Logged out successfully!');
    }

    // Otherwise if this is an HTML-wanting browser, do a redirect.
    return res.redirect('/');
  },


  /**
   * `UserController.signup()`
   */

  signup: function (req, res) {

    // Attempt to signup a user using the provided parameters
    User.signup({
      fullName: req.param('fullName'),
      emailAddress: req.param('emailAddress'),
      password: req.param('password')
    }, function (err, user) {
      // res.negotiate() will determine if this is a validation error
      // or some kind of unexpected server error, then call `res.badRequest()`
      // or `res.serverError()` accordingly.
      if (err) return res.negotiate(err);

      // Go ahead and log this user in as well.
      // We do this by "remembering" the user in the session.
      // Subsequent requests from this user agent will have `req.session.me` set.
      // req.session.me = user._id;

      // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
      // send a 200 response letting the user agent know the signup was successful.
      if (req.wantsJSON) {
        return res.ok('Signup successful!');
      }

      // Otherwise if this is an HTML-wanting browser, redirect to /welcome.
      return res.redirect('/login');
    });
  }

	// signup: function(req, res) {
  //       var emailAddress = req.body.emailAddress;
  //       var password = req.body.password;
  //       var fullName = req.body.fullName;
  //       console.log(req.body)
  //       User.create({fullName: req.body.fullName, emailAddress: req.body.emailAddress, password: req.body.password}).exec(function(err, user) {
  //         if (err) {
  //           res.send(err.status, {err: err});
  //           return;
  //         }
  //         if (user) {
  //           return res.redirect('/');
  //         }
  //       });
  //   },

};





//     login: function(req, res) {
//         var emailAddressAddress = req.body.emailAddressAddress;
//         var password = req.body.password;
//         var user = {
//             sub: 'User detail',
//             emailAddressAddress: emailAddressAddress
//         };
        
//         console.log(password)

//         User.findOneByemailAddressAddress(emailAddressAddress, function(err, user) {
//           if (!user) {
//             return res.json(401, {err: 'Invalid emailAddressAddress. User does not exist'});
//           }

//           User.validPassword(password, user, function(err, valid) {
//             if (err) {
//               return res.json(403, {err: 'forbidden'});
//             }

//             if (!valid) {
//               return res.json(401, {err: 'invalid fullfullName or password'});
//             } else {
//               res.render('/index')
//             }
//           });
//         })
//     }
// };