1) Create a new file called **program.js**

2) **register()** a new device with Meshblu

3) Your device should contain the additional properties:
```
"type": "drone"
"color": "black"
```

4) In the callback, **console.log response.hasOwnProperty("type")** and **response.hasOwnProperty("color")**

# Hints
-- You should install/require meshblu-http and create a new meshblu-http instance, with no params

-- You can then call register() on your meshblu-http instance

-- register() takes two params: an object with device properties and a callback function(error, response)
