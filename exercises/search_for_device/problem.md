1) Create a new file called **program.js**, then install/require 'meshblu-http'

2) **register()** a new device with Meshblu, containing the property:
```
"type": "not-a-drone"
```

3) **search()** for your device. Your query should contain:
```
"type": "not-a-drone"
```

4) In the callback, **console.log(response[0].hasOwnProperty("uuid"))**,
  **console.log(response[0].hasOwnProperty("token"))**, and
  **console.log(response[0].hasOwnProperty("meshblu"))**

# Hints
-- You should install/require meshblu-http and create a new meshblu-http instance, with no params

-- After you register a new device, you should create a new meshblu-http instance, with an object
  containing the response uuid and token (var device = new Meshblu({"uuid": uuid, "token": token}))

-- search() has three params: query, metadata, and a callback function(error, response)
