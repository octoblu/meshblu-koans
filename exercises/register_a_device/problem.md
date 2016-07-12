## Info
To **register a new device** with Meshblu, you will need to post to:
```
https://meshblu.octoblu.com/devices
```
When you create a new device, you can also **add any properties** you want, by **including them in the data** of the request

## Steps
Create a new file called **program.js**

**Register** a new device with Meshblu, containing the following properties:
```
type: drone
color: black
```
Once you have made the request, **console.log response.data.type** and **response.data.color**
