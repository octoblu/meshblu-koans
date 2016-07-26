1) Create a new file called **program.js**

2) **Register** a new device with Meshblu, containing the additional property:
```
"type": "awesome-device"
```

3) Then **Get** your device with **whoami**

4) In the callback, **console.log response.type**

# Hints
-- You should install/require meshblu-http and create a new meshblu-http instance, with no params

-- After you register a new device, you should create a new meshblu-http instance, with an object containing the uuid and token

-- You can then call whoami(), which takes a callback function(error, response)
