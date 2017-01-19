1) Create a new file called **program.js**, then install/require 'meshblu-http'
  and create a new instance ( `var meshblu = new Meshblu()` )

2) **register(properties, function(error, response){})** a new device with Meshblu, then in the
  callback, claim your new device ( `var device = new Meshblu({ 'uuid': uuid, 'token': token })` )

3) In the callback of **register()**, **delete** your device by calling **unregister(device, function(error, response){})**

4) In the callback of **unregister()**, **console.log(error)** and **console.log(response.hasOwnProperty('uuid'))**

### Hints

 - You should call unregister() on your claimed meshblu-http instance

- You can just pass the 'response' from register() as first param in unregister()
