1) Create a new file called **program.js**

2) **register()** a new device with Meshblu

3) Then **update()** your device with these properties:
```
"type": "beacon"
"color": "green"
```

4) **Get** your device with **whoami()**

5) In the callback, **console.log response.type** and **response.color**

# Hints
-- You should install/require meshblu-http and create a new meshblu-http instance, with no params

-- After you register a new device, you should create a new meshblu-http instance, with an object containing the response uuid and token

-- update() has three params: uuid, properties object, and a callback function(error, response)
