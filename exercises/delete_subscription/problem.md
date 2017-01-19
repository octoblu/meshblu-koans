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

7) Now call **deleteSubscription(sub_to_delete, function(error, response){})** with the subscription
  options object that you defined in step 3

8) In the callback of **deleteSubscription()**, call **subscriptions(uuid, function(error, response){})**

9) In the callback of **subscriptions()**, **console.log(response)**

### Hints

 - You should call createSubscription(), subscriptions(), and deleteSubscription()
 - on your claimed meshblu-http instance

- In the callback of register(), you should assign the uuid to a variable so that
- you can use it from within other callbacks: `var uuid = response.uuid`
