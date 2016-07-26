1) Create a new file called **program.js**

2) **register()** a new device with Meshblu

3) Reset the token of your device with **resetToken()**

4) In the callback, **console.log response.hasOwnProperty("uuid")** and **response.hasOwnProperty("token")**

# Hints
-- You should install/require meshblu-http and create a new meshblu-http instance, with no params

-- After you register a new device, you should create a new meshblu-http instance, with an object containing the uuid and token

-- resetToken() has two params: uuid and a callback function(error, response)
