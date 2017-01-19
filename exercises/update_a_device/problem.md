1) Create a new file called **program.js**, then install/require 'meshblu-http'
  and create a new instance ( `var meshblu = new Meshblu()` )

2) **register(properties, function(error, response){})** a new device with Meshblu

3) In the callback of **register()**, you should claim your new device by creating
  a new meshblu-http instance and passing it an object containing the uuid and token:

  `var device = new Meshblu({ 'uuid': response.uuid, 'token': response.token })`

4) Now you can **update(properties, function(error, response){})** your device
  with these properties:

  `{ 'type': 'beacon', 'color': 'green' }`

5) In the callback of **update()**, **get** your device with **whoami(function(error, response){})**

6) In the callback of **whoami()**, **console.log(response.type)** and **console.log(response.color)**

### Hints

- You should call update() and whoami() on your claimed meshblu-http instance
