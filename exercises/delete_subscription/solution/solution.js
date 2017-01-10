var MeshbluHttp = require('meshblu-http')

var meshbluHttp = new MeshbluHttp()

meshbluHttp.register({}, function(error, response) {
  var uuid = response.uuid

  var device = new MeshbluHttp({uuid: uuid, token: response.token})

  var broadcastReceivedSubscription = {
    emitterUuid: uuid,
    subscriberUuid: uuid,
    type: 'broadcast.received'
  }

  device.createSubscription(broadcastReceivedSubscription, function(error) {

    device.subscriptions(uuid, function(error, response) {
      console.log(response[0].type)

      device.deleteSubscription(broadcastReceivedSubscription, function(error) {

        device.subscriptions(uuid, function(error, response) {
          console.log(response)
        })
      })
    })
  })
})
