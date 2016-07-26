var meshbluHttp = require('meshblu-http')

var device = new meshbluHttp()

device.register({type: "not-a-drone"}, function(error, response) {
  var newDevice = new meshbluHttp({uuid: response.uuid, token: response.token})

  newDevice.search({type: "not-a-drone"}, {}, function(error, response) {
    console.log(response[0].hasOwnProperty("uuid"))
    console.log(response[0].hasOwnProperty("token"))
    console.log(response[0].hasOwnProperty("meshblu"))
  })
})
