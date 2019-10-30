
module.exports.routes = {

  '/':            { view: 'pages/homepage' },
  'GET /login':   { view: 'entrance/login' },
  'GET /signup':   { view: 'entrance/signup' },
  'GET /index':   { view: 'index/index' },
  'GET /itin':   { view: 'main/itin' },



  'post /login':   'UserController.login',
  'post /signup': 'UserController.signup',
  '/logout': 'UserController.logout',


};
