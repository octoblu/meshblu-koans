var meshbluHttp = require('meshblu-http')

var device = new meshbluHttp()
var uuid, token

device.register({type: "awesome-device"}, function(error, response) {
  uuid = response.uuid
  token = response.token

  var newDevice = new meshbluHttp({uuid: uuid, token: token})

  newDevice.whoami(function(error, response) {
    console.log(response.type)
  })
})
