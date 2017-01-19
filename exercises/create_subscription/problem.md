1) Create a new file called **program.js**, then install/require 'meshblu-http'
  and create a new instance ( `var meshblu = new Meshblu()` )

2) **register(properties, function(error, response){})** a new device with Meshblu, then in the
  callback, claim your new device ( `var device = new Meshblu({ 'uuid': uuid, 'token': token })` )

3) In the callback of **register()**, create a new object, containing the options for the subscription:
```javascript
var broadcastReceivedSubscription = {
  emitterUuid: response.uuid,
  subscriberUuid: response.uuid,
  type: 'broadcast.received'
}
```

4) Now create the subscription by calling **createSubscription(options, function(error){})**

5) In the callback of **createSubscription()**, call **subscriptions(uuid, function(error, response){})**

6) In the callback of **subscriptions()**, **console.log(response[0].type)**

### Hints

 - You should call createSubscription() and subscriptions() on your claimed meshblu-http instance
