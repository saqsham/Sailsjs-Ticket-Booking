/**
 * TrainController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  itin: function (req, res) {
    Train.create({
      origin: req.param('origin'),
      destination: req.param('destination'),
      depart: req.param('depart')
    }, function (err, user) {
      req.session.origin = req.param('origin');
      req.session.destination = req.param('destination');
      req.session.depart = req.param('depart');

      if (!err) {
        return res.redirect('/train/acco');

      }
    });
  },


  acco: function (req, res) {
    Train.create({
        origin: req.session.origin,
        destination: req.session.destination,
        depart: req.session.depart,
        trainName: req.param('customRadio')
      },
      function (err, user) {
        console.log(req.session.origin)
        req.session.trainName = req.param('trainName');

        return res.redirect('/train/pass');

      });
  },


  pass: function (req, res) {
    Train.create({
      origin: req.session.origin,
      destination: req.session.destination,
      depart: req.session.depart,
      trainName: req.session.trainName,
      book: req.param('book'),
      age: req.param('age'),
      gender: req.param('gender'),
      contact: req.param('contact'),
      address: req.param('address'),

    }, function (err, user) {
      req.session.book = req.param('book');
      req.session.age = req.param('age');
      req.session.gender = req.param('gender');
      req.session.contact = req.param('contact');
      req.session.address = req.param('address');

      if (!err) {
        return res.redirect('/train/payi');

      } else {
        res.send(req.session);
      }

    });
  },


  payi: function (req, res) {
    Train.create({
      origin: req.session.origin,
      destination: req.session.destination,
      depart: req.session.depart,
      trainName: req.session.trainName,
      book: req.session.book,
      age: req.session.age,
      gender: req.session.gender,
      contact: req.session.contact,
      address: req.session.address,
      price: req.param('price')

    }, function (err, user) {
      console.log(req.session);
      if (!err) {
        return res.redirect('/index');

      } else {
        res.send(req.session);
      }

    });
  }


};
