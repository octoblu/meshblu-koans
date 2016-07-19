var meshbluHttp = require('meshblu-http')

var device = new meshbluHttp()
var uuid, token

device.register({}, function(error, response) {
  uuid = response.uuid
  token = response.token

  var newDevice = new meshbluHttp({uuid: uuid, token: token})

  newDevice.update(uuid, {type: "drone", color: "black"}, function(error, response) {

    newDevice.whoami(function(error, response) {
      console.log(response.type, response.color)
    })
  })
})
