1) Create a new file called **program.js**, then install/require 'meshblu-http'
  and create a new instance ( `var meshblu = new Meshblu()` )

2) **register(properties, function(error, response){})** a new device with Meshblu, then in the
  callback, claim your new device ( `var device = new Meshblu({ 'uuid': uuid, 'token': token })` )

3) In the callback, revoke the token with **revokeToken(uuid, token, function(error, response){})**

4) In the callback of **revokeToken()** you need to **console.log(response)**

5) Then create a new token with **generateAndStoreToken(uuid, function(error, response){})**

6) In the callback of **generateAndStoreToken()**, **console.log(response.hasOwnProperty('uuid'))**,
  **console.log(response.hasOwnProperty('token'))** and **console.log(response.hasOwnProperty('createdAt'))**

### Hints

 - You should call revokeToken() and generateAndStoreToken() on your claimed meshblu-http instance

- In the callback of register(), you should assign the uuid to a variable so that
- you can use it from within other callbacks: `var uuid = response.uuid`
