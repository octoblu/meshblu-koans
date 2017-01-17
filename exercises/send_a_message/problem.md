1) Create a new file called **program.js**, then install/require 'meshblu-http'

2) **register()** a new device with Meshblu with the callback **function(error, receiver)**

3) Create a receiver device by calling new meshblu-http with the uuid and
  token of the response

4) Create a new object, which we will use to register a sender device:
```
var registerSender = {
  meshblu: {
    version: '2.0.0',
    whitelists: {
      broadcast: {
        sent: [{uuid: receiver.uuid}]
      }
    }
  }
}
```

5) **register()** a new device with registerSender as the first parameter
  and the callback **function(error, sender)**

6) Create a new object, which we will use for creating a subscription:
```
var broadcastReceivedSubscription = {
  emitterUuid: receiver.uuid,
  subscriberUuid: receiver.uuid,
  type: 'broadcast.received'
}
```

7) **createSubscription()** with the options object above

8) **console.log("Receive subscription created")** and then create a new object:
```
var broadcastSentSubscription = {
  emitterUuid: sender.uuid,
  subscriberUuid: receiver.uuid,
  type: 'broadcast.sent'
}
```

9) **createSubscription()** with the options object above

10) **console.log("Sent subscription created")** then create a new instance of Meshblu Firehose:
```
var meshbluFirehose = new MeshbluFirehose({
  meshbluConfig: {
    hostname: 'meshblu-firehose-socket-io.octoblu.com',
    port: 443,
    protocol: 'wss',
    uuid: receiver.uuid,
    token: receiver.token
  }
})
```

11) Now you can set **meshbluFirehose.on('message', function(message))** to
  contain **console.log("Received a message: " + message.data.payload)** and
  **meshbluFirehose.close(function(error){})** as part of the callback

12) Finally, we can call **meshbluFirehose.connect()** with a callback **function(error)**

13) In the callback, **console.log("Connected")**, **register()** the sender device
  by calling **new MeshbluHttp({uuid: sender.uuid, token: sender.token})**, and
  send a message from the sender device, as follows:
```
senderDevice.message({devices: ['*'], payload: "Hello World"})
```

# Hints
-- You should install/require meshblu-http and create a new meshblu-http instance, with no params

-- You should install/require meshblu-firehose-socket-io

-- After you register a new device, you should create a new meshblu-http instance, with an object
  containing the response uuid and token (var device = new Meshblu({"uuid": uuid, "token": token}))

-- createSubscription() has two params: options and a callback function(error)

-- meshbluFirehose.on('message') will get called every time your device receives a message
