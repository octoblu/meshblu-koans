var meshbluHttp = require('meshblu-http')

var device = new meshbluHttp()
var uuid, token

device.register({}, function(error, response) {
  uuid = response.uuid
  token = response.token

  var newDevice = new meshbluHttp({uuid: uuid, token: token})

  newDevice.unregister(response, function(error, response) {
    console.log(error)
  })
})
