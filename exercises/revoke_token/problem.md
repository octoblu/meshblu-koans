1) Create a new file called **program.js**, then install/require 'meshblu-http'

2) **register()** a new device with Meshblu

3) Revoke the token of your device with **revokeToken()**

4) In the callback, **console.log(error)** and **console.log(response)**

# Hints
-- You should install/require meshblu-http and create a new meshblu-http instance, with no params

-- After you register a new device, you should create a new meshblu-http instance, with an object containing the response uuid and token

-- revokeToken() has three params: uuid, token, and a callback function(error, response)

-- Revoking your device's only token will render it useless
