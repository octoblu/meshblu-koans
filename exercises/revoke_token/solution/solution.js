var meshbluHttp = require('meshblu-http')

var device = new meshbluHttp()

device.register({}, function(error, response) {
  var newDevice = new meshbluHttp({uuid: response.uuid, token: response.token})

  newDevice.revokeToken(response.uuid, response.token, function(error, response) {
    console.log(error)
    console.log(response)
  })
})
