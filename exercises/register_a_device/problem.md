1) Create a new file called **program.js**, then **Register** a new V2 device with Meshblu, containing the additional properties:
```
"type": "drone"
"color": "black"
```
2) Also set **039accc2-eccb-4840-95a6-9511763f3d81** as the owner

3) Once you have made the request, **console.log response.data.owner**, **response.data.type**, and **response.data.color** in order to verify that you added the properties to the device

# Hints
To **register a new device** with Meshblu, you need to POST to: `https://meshblu.octoblu.com/devices`

To set an owner and make your device V2, add the following properties:
```
"owner": owner_uuid,
"name": "test",
"meshblu": {
  "version": "2.0.0",
  "whitelists": {
    "discover": {
      "view": [{"uuid": owner_uuid}]
    },
    "configure": {
      "update": [{"uuid": owner_uuid}]
    }
  }
}
```

When you create a new device you can **add any properties** you want by **including them in the data** of your request
