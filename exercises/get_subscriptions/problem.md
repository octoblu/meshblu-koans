1) Create a new file called **program.js**

2) **register()** a new device with Meshblu

5) **Get** your subscriptions by calling subscriptions()

6) In the callback of subscriptions(), **console.log response**

# Hints
-- You should install/require meshblu-http and create a new meshblu-http instance, with no params

-- After you register a new device, you should create a new meshblu-http instance, with an object containing the response uuid and token

-- subscriptions() has two params: uuid and a callback function(error, response)
