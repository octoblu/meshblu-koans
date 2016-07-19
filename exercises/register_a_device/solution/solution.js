var meshblu = require('meshblu-http')

var newDevice = new meshblu()

newDevice.register({type: "drone", color: "black"}, function(error, response) {
  console.log(response.type, response.color)
})
