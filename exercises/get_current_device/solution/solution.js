var MeshbluHttp = require('meshblu-http')

var meshbluHttp = new MeshbluHttp()

meshbluHttp.register({type: "awesome-device"}, function(error, response) {
  var device = new MeshbluHttp({uuid: response.uuid, token: response.token})

  device.whoami(function(error, response) {
    console.log(response.hasOwnProperty("type"))
  })
})
