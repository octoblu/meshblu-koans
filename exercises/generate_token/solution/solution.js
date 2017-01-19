var MeshbluHttp = require('meshblu-http')

var meshbluHttp = new MeshbluHttp()

meshbluHttp.register({}, function(error, response) {
  var uuid = response.uuid

  var device = new MeshbluHttp({uuid: uuid, token: response.token})

  device.revokeToken(uuid, response.token, function(error, response) {
    console.log(response)

    device.generateAndStoreToken(uuid, function(error, response) {
      console.log(response.hasOwnProperty('uuid'))
      console.log(response.hasOwnProperty('token'))
      console.log(response.hasOwnProperty('createdAt'))
    })
  })
})
