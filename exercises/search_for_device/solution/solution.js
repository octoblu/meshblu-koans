var MeshbluHttp = require('meshblu-http')

var meshbluHttp = new MeshbluHttp()

meshbluHttp.register({type: 'not-a-drone'}, function(error, response) {
  var device = new MeshbluHttp({uuid: response.uuid, token: response.token})

  device.search({type: 'not-a-drone'}, {}, function(error, response) {
    console.log(response[0].hasOwnProperty('uuid'))
    console.log(response[0].hasOwnProperty('token'))
    console.log(response[0].hasOwnProperty('meshblu'))
  })
})
