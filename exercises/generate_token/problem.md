1) Create a new file called **program.js**, then install/require 'meshblu-http'

2) **register()** a new device with Meshblu

3) Revoke the token of your device with **revokeToken()**

4) Create a new token with **generateAndStoreToken()**

5) In the callback, **console.log response.hasOwnProperty("uuid")**, **response.hasOwnProperty("token")**, and **response.hasOwnProperty("createdAt")**

# Hints
-- You should install/require meshblu-http and create a new meshblu-http instance, with no params

-- After you register a new device, you should create a new meshblu-http instance, with an object containing the response uuid and token

-- generateAndStoreToken() has two params: uuid and a callback function(error, response)
