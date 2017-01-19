var MeshbluHttp = require('meshblu-http')

var meshbluHttp = new MeshbluHttp()

meshbluHttp.register({}, function(error, response) {
  var device = new MeshbluHttp({uuid: response.uuid, token: response.token})

  device.update(response.uuid, {type: 'beacon', color: 'green'}, function(error, response) {

    device.whoami(function(error, response) {
      console.log(response.type)
      console.log(response.color)
    })
  })
})
