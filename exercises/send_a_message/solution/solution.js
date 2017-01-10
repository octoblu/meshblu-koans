var MeshbluHttp     = require('meshblu-http')
var MeshbluFirehose = require('meshblu-firehose-socket.io')

var meshbluHttp = new MeshbluHttp()

meshbluHttp.register({name: 'firehose-test:receiver'}, function(error, receiver) {
  var receiverDevice = new MeshbluHttp({uuid: receiver.uuid, token: receiver.token});

  var registerSender = {
    name: 'firehose-test:sender',
    meshblu: {
      version: '2.0.0',
      whitelists: {
        broadcast: {
          sent: [{uuid: receiver.uuid}]
        }
      }
    }
  }

  meshbluHttp.register(registerSender, function(error, sender) {
    var broadcastReceivedSubscription = {emitterUuid: receiver.uuid, subscriberUuid: receiver.uuid, type: 'broadcast.received'}

    receiverDevice.createSubscription(broadcastReceivedSubscription, function(error) {
      console.log("Receive subscription created")

      var broadcastSentSubscription = {emitterUuid: sender.uuid, subscriberUuid: receiver.uuid, type: 'broadcast.sent'}

      receiverDevice.createSubscription(broadcastSentSubscription, function(error) {
        console.log("Sent subscription created")

        var meshbluFirehose = new MeshbluFirehose({
          meshbluConfig: {
            hostname: 'meshblu-firehose-socket-io.octoblu.com',
            port: 443,
            protocol: 'wss',
            uuid: receiver.uuid,
            token: receiver.token
          }
        })

        meshbluFirehose.on('message', function(message) {
          console.log("Received a message: " + message.data.payload)

          meshbluFirehose.close(function(error){})
        })

        meshbluFirehose.connect(function(error) {
          console.log("Connected")

          var senderDevice = new MeshbluHttp({uuid: sender.uuid, token: sender.token})

          senderDevice.message({devices: ['*'], payload: "Hello World"});
        })
      })
    })
  })
})
