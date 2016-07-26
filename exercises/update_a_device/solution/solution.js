var meshbluHttp = require('meshblu-http')

var device = new meshbluHttp()

device.register({}, function(error, response) {
  var newDevice = new meshbluHttp({uuid: response.uuid, token: response.token})

  newDevice.update(response.uuid, {type: "beacon", color: "green"}, function(error, response) {

    newDevice.whoami(function(error, response) {
      console.log(response.hasOwnProperty("type"))
      console.log(response.hasOwnProperty("color"))
    })
  })
})
