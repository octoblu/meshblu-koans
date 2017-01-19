1) Create a new file called **program.js**, then install/require 'meshblu-http'
  and create a new instance ( `var meshblu = new Meshblu()` )

2) **register(properties, function(error, response){})** a new device with Meshblu, then in the
  callback, claim your new device ( `var device = new Meshblu({ 'uuid': uuid, 'token': token })` )

3) In the callback, reset the token of your device by calling **resetToken(uuid, function(error, response){})**

4) In the callback of **resetToken()**, **console.log(response.hasOwnProperty('uuid'))** and
  **console.log(response.hasOwnProperty('token'))**

### Hints

- You should call resetToken() on your claimed meshblu-http instance
