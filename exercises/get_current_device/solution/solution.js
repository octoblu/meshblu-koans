var meshbluHttp = require('meshblu-http')

var device = new meshbluHttp()

device.register({type: "awesome-device"}, function(error, response) {
  var newDevice = new meshbluHttp({uuid: response.uuid, token: response.token})

  newDevice.whoami(function(error, response) {
    console.log(response.type)
  })
})
