'use strict';
const at_messsage =require ('../Agric-Watson/api/helpers/post_message')
var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  
  console.log('Server running port:10010');
  //at_messsage.sendMess('Hello')
  
});

