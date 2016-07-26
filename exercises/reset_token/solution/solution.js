var meshbluHttp = require('meshblu-http')

var device = new meshbluHttp()

device.register({}, function(error, response) {
  var newDevice = new meshbluHttp({uuid: response.uuid, token: response.token})

  newDevice.resetToken(response.uuid, function(error, response) {
    console.log(response.hasOwnProperty("uuid"))
    console.log(response.hasOwnProperty("token"))
  })
})
