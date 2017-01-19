1) Create a new file called **program.js**, then install/require 'meshblu-http'
  and create a new instance ( `var meshblu = new Meshblu()` )

2) **register(properties, function(error, response){})** a new device with Meshblu

3) Your new device should contain the additional property:

  `{ 'type': 'awesome-device' }`

4) In the callback of **register()**, you should claim your new device by creating
  a new meshblu-http instance and passing it an object containing the uuid and token:

  `var device = new Meshblu({ 'uuid': response.uuid, 'token': response.token })`

5) Now you can **get** your device with **whoami(function(error, response){})**

6) In the callback, **console.log(response.type)**

### Hints

- You should call whoami() on your claimed meshblu-http instance
