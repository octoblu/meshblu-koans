1) Create a new file called **program.js**

2) **Register** a new device with Meshblu

3) Then **Update** your device with these properties:
```
"type": "beacon"
"color": "green"
```

4) **Get** your device

5) In the callback, **console.log response.type** and **response.color**

# Hints
-- You should install/require meshblu-http and create a new meshblu-http instance, with no params

-- After you register a new device, you should create a new meshblu-http instance, with an object containing the uuid and token

-- You can then call update(), which takes three params: uuid, object containing properties to update, and a callback function(error, response)

-- After you update, call whoami() to see your changed device
