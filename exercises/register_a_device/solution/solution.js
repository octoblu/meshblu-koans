var MeshbluHttp = require('meshblu-http')

var meshbluHttp = new MeshbluHttp()

meshbluHttp.register({type: "drone", color: "black"}, function(error, response) {
  console.log(response.hasOwnProperty("type"))
  console.log(response.hasOwnProperty("color"))
})
