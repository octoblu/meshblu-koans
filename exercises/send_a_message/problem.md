1) Create a new file called **program.js**

2) **register()** a new device with Meshblu, containing the property:

3) Create a new object, containing the options for the subscription:
```
var broadcastReceivedSubscription = {
  emitterUuid: response.uuid,
  subscriberUuid: response.uuid,
  type: 'broadcast.received'
}
```

# Hints
-- You should install/require meshblu-http and create a new meshblu-http instance, with no params

-- You should install/require meshblu-firehose-socket-io

-- After you register a new device, you should create a new meshblu-http instance, with an object containing the response uuid and token

-- createSubscription() has two params: options and a callback function(error)
