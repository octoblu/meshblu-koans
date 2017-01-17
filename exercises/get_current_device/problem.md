1) Create a new file called **program.js**, then install/require 'meshblu-http'

2) **register()** a new device with Meshblu, containing the additional property:
```
"type": "awesome-device"
```

3) Once you register a new device, from the callback, you should create a new meshblu-http
    instance with an object containing the response.uuid and response.token

4) From inside the callback of **register()**, **get** your device with **whoami()**

5) In the callback, **console.log response.type**

# Hints
-- You should install/require meshblu-http and create a new meshblu-http instance, with no params

-- whoami() has one param: a callback function(error, response)
