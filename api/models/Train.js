/**
 * Train.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,

  attributes: {
    origin: {
      type: 'string'
    },
    destination: {
      type: 'string'
    },
    depart: {
      type: 'string'
    },
    trainName: {
      type: 'string'
    },
    bookedBy: {
      type: 'string'
    },
    age: {
      type: 'string'
    },
    gender: {
      type: 'string'
    },
    contact: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    price: {
      type: 'string'
    }
  },

  

  itin: function (inputs, cb) {
    // Create a user
    Train.create({
      origin: inputs.origin,
      destination: inputs.destination,
      depart: inputs.depart
    })
    .exec(cb);
  },

  

  acco: function (inputs, cb) {
    
    Train.create({
      trainName: inputs.trainName
    })
    .exec(cb);
  },


  
  payi: function (inputs, cb) {
    
    Train.create({
      price: inputs.price
    })
    .exec(cb);
  },


  pass: function (inputs, cb) {
    // Create a user
    Train.create({
      bookedBy: inputs.book,
      age: inputs.age,
      gender: inputs.gender,
      contact: inputs.contact,
      address: inputs.address
    })
    .exec(cb);
  },

};
