var MeshbluHttp = require('meshblu-http')

var meshbluHttp = new MeshbluHttp()

meshbluHttp.register({}, function(error, response) {
  var device = new MeshbluHttp({uuid: response.uuid, token: response.token})

  device.resetToken(response.uuid, function(error, response) {
    console.log(response.hasOwnProperty("uuid"))
    console.log(response.hasOwnProperty("token"))
  })
})
