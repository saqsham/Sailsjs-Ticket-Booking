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

};
