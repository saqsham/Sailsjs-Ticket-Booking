/**
 * TrainController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  itin: function (req, res) {
    Train.itin({
      origin: req.param('origin'),
      destination: req.param('destination'),
      depart: req.param('depart')
    }, function (err, user) {
      req.session.origin = req.param('origin');
      console.log(req.session);
      if (!err) {
        return res.redirect('/train/acco');

      } else {
        res.send(req.session);
      }

    });
  },


  pass: function (req, res) {
    Train.pass({
        book: req.param('book'),
        age: req.param('age'),
        gender: req.param('gender'),
        contact: req.param('contact'),
        address: req.param('address'),

    }, function (err, user) {
      console.log(req.session);
      if (!err) {
        return res.redirect('/train/payi');

      } else {
        res.send(req.session);
      }

    });
  },

  
  payi: function (req, res) {
    Train.payi({
       price: req.param('price'),

    }, function (err, user) {
      console.log(req.session);
      if (!err) {
        return res.redirect('/index');

      } else {
        res.send(req.session);
      }

    });
  },


  acco: function (req, res) {
      var x = req.session.origin;
      console.log(x);
      Train.acco({origin: x, trainName: req.param('customRadio')},
      function (err, user){
      return res.redirect('/train/pass');

      });
      
  }

};
