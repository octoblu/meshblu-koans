var MeshbluHttp = require('meshblu-http')

var meshbluHttp = new MeshbluHttp()

meshbluHttp.register({}, function(error, response) {
  var device = new MeshbluHttp({uuid: response.uuid, token: response.token})

  var broadcastReceivedSubscription = {
    emitterUuid: response.uuid,
    subscriberUuid: response.uuid,
    type: 'broadcast.received'
  }

  device.createSubscription(broadcastReceivedSubscription, function(error) {

    device.subscriptions(response.uuid, function(error, response) {
      console.log(response[0].type)
    })
  })
})
