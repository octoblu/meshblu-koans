1) Create a new file called **program.js**

2) **register()** a new device with Meshblu

3) Then **delete** your device by calling **unregister()**

4) In the callback, **console.log error** and **response.hasOwnProperty("uuid")**

# Hints
-- You should install/require meshblu-http and create a new meshblu-http instance, with no params

-- After you register a new device, you should create a new meshblu-http instance, with an object containing the response uuid and token

-- unregister() has two params: device to unregister and a callback function(error, response)

-- You can just pass the *response* from register() as first param in unregister()
