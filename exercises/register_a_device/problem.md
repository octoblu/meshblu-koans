1) Create a new file called **program.js**, then install/require 'meshblu-http'

2) **register()** a new device with Meshblu

3) Your device should contain the additional properties:
```
"type": "drone"
"color": "black"
```

4) In the callback, **console.log response.type** and **response.color**

# Hints
-- You should install/require meshblu-http and create a new meshblu-http instance, with no params

-- You can then call register() on your meshblu-http instance

-- register() takes two params: an object with device properties and a callback function(error, response)
