var MeshbluHttp = require('meshblu-http')

var meshbluHttp = new MeshbluHttp()

meshbluHttp.register({}, function(error, response) {
  var device = new MeshbluHttp({uuid: response.uuid, token: response.token})

  device.unregister(response, function(error, response) {
    console.log(error)
    console.log(response.hasOwnProperty("uuid"))
  })
})
