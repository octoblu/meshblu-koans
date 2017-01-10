var MeshbluHttp = require('meshblu-http')

var meshbluHttp = new MeshbluHttp()

meshbluHttp.register({}, function(error, response) {
  var device = new MeshbluHttp({uuid: response.uuid, token: response.token})

  device.mydevices({}, function(error, response) {
    console.log(response)
  })
})
