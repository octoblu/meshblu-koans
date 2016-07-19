1) Create a new file called **program.js**, then **Register** a new device with Meshblu

2) Your device should contain the additional properties:
```
"type": "drone"
"color": "black"
```

3) In the callback, **console.log response.type** and **response.color**

# Hints
- You should install/require meshblu-http and create a new meshblu-http instance, with no params
- You can then call register() on your meshblu-http instance
- register() takes two params, device properties(object) and a function(error, response)
