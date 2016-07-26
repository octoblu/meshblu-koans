var meshbluHttp = require('meshblu-http')

var newDevice = new meshbluHttp()

newDevice.register({type: "drone", color: "black"}, function(error, response) {
  console.log(response.hasOwnProperty("type"))
  console.log(response.hasOwnProperty("color"))
})
