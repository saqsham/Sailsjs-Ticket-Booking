
module.exports.routes = {


  
  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  '/':                     { view: 'pages/homepage' },
  'GET /login':            { view: 'entrance/login' },
  'GET /signup':           { view: 'entrance/signup' },
  'GET /index':            { view: 'index/index' },
  'GET /indexTwo':            { view: 'index/indexTwo' },
  'GET /indexTwo':            { view: 'index/indexTwo' },
  'GET /indexTwo':            { view: 'index/indexTwo' },

  'GET /train/itin':       { view: 'train/itin' },
  'GET /train/acco':       { view: 'train/acco' },
  'GET /train/pass':       { view: 'train/pass' },
  'GET /train/payi':       { view: 'train/payi' },
  
  'GET /car/itin':       { view: 'train/itin' },
  'GET /car/acco':       { view: 'train/acco' },
  'GET /car/pass':       { view: 'train/pass' },
  'GET /car/payi':       { view: 'train/payi' },
  
  'GET /hotel/itin':       { view: 'train/itin' },
  'GET /hotel/acco':       { view: 'train/acco' },
  'GET /hotel/pass':       { view: 'train/pass' },
  'GET /hotel/payi':       { view: 'train/payi' },



  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
 

  '/logout':               'UserController.logout',
  'post /login':           'UserController.login',
  'post /signup':          'UserController.signup',

  'post /train/itin':      'TrainController.itin',
  'post /train/acco':      'TrainController.acco',
  'post /train/pass':      'TrainController.pass',
  'post /train/payi':      'TrainController.payi',

  'post /car/payi':      'CarController.payi',
  'post /car/payi':      'CarController.payi',
  'post /car/payi':      'CarController.payi',
  'post /car/payi':      'CarController.payi',

  'post /hotel/payi':      'HotelController.payi',
  'post /hotel/payi':      'HotelController.payi',
  'post /hotel/payi':      'HotelController.payi',
  'post /hotel/payi':      'HotelController.payi',


};
