1) Create a new file called **program.js**, then install/require 'meshblu-firehose-socket-io',
  install/require 'meshblu-http', and create a new instance ( `var meshblu = new Meshblu()` )

2) **register(properties, function(error, receiver){})** a new device with Meshblu
  *NOTE: the second value of the callback is receiver*

3) In the callback, claim your receiver:

  `var receiver = new Meshblu({ 'uuid': receiver.uuid, 'token': receiver.token })`

4) Create a new object, which we will use to register a sender device:
```javascript
var registerSender = {
  meshblu: {
    version: '2.0.0',
    whitelists: {
      broadcast: {
        sent: [ { uuid: receiver.uuid } ]
      }
    }
  }
}
```

5) Now you can **register(registerSender, function(error, sender){})** the sender device
  *NOTE: the second value of the callback is sender*

6) In the callback, create a new object, which we will use for creating a subscription:
```
var broadcastReceivedSubscription = {
  emitterUuid: receiver.uuid,
  subscriberUuid: receiver.uuid,
  type: 'broadcast.received'
}
```

7) Now you can **createSubscription(options, function(error){})** by passing the above object

8) In the callback, **console.log('Receive subscription created')** and then create a new object:
```
var broadcastSentSubscription = {
  emitterUuid: sender.uuid,
  subscriberUuid: receiver.uuid,
  type: 'broadcast.sent'
}
```

9) Now you can **createSubscription(options, function(error){})** by passing the above object

10) In the callback, **console.log('Sent subscription created')** then create a
  new instance of the Firehose:
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

11) Now you can call **meshbluFirehose.on('message', function(message){})**, and in
  the callback, **console.log('Received a message: ' + message.data.payload)** and
  call **meshbluFirehose.close(function(error){})**

12) After the **meshbluFirehose.on('message')** call, you can
  call **meshbluFirehose.connect(function(error){})**

13) In the callback, **console.log('Connected')**, **claim** the sender device:

  `var senderDevice = new MeshbluHttp({ uuid: sender.uuid, token: sender.token })`

  and send a message from the sender device:

  `senderDevice.message({ devices: ['*'], payload: 'Hello World' })`

### Hints

 - You should call createSubscription() on your claimed meshblu-http instance

- meshbluFirehose.on('message') will get called every time your device receives a message
