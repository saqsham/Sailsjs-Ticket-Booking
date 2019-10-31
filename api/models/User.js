var bcrypt = require('bcrypt');

module.exports = {

  schema: true,

  attributes: {
    fullName: {
        type: 'string',
        required: true
    },
    emailAddress: {
        type: 'string',
        required: true   
    },
    password: {
        type: 'string',
        required: true
    }
  },


  signup: function (inputs, cb) {
    // Create a user
    User.create({
      fullName: inputs.fullName,
      emailAddress: inputs.emailAddress,
      // TODO: But encrypt the password first
      password: inputs.password
    })
    .exec(cb);
  },


  attemptLogin: function (inputs, cb) {
    // Create a user
    User.findOne({
      emailAddress: inputs.emailAddress,
      // TODO: But encrypt the password first
      password: inputs.password
    })
    .exec(cb);
  }


  // beforeCreate: function(values, next) {
  //   // Hash password
  //     bcrypt.hash(values.password, 10, function(err, hash) {
  //       if (err) return next(err);
  //       values.password = hash;
  //       //calling next() with an argument returns an error. Useful for canceling the entire operation if some criteria fails.
  //       next();
  //   });
  // },

  // validPassword: function(password, user, cb) {
  //   bcrypt.compare(password, user.password, function(err, match) {
  //     if (err) cb(err);

  //     if (match) {
  //       cb(null, true);
  //     } else {
  //       cb(err);
  //     }
  //   });
  // }


};