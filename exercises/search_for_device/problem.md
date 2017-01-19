1) Create a new file called **program.js**, then install/require 'meshblu-http'
  and create a new instance ( `var meshblu = new Meshblu()` )

2) **register(properties, function(error, response){})** a new device with Meshblu,
  containing the following property:

  `{ 'type': 'not-a-drone' }`

3) In the callback, claim your new device: `var device = new Meshblu({ 'uuid': uuid, 'token': token })`

4) Then, **search(query, metadata, function(error, response){})** for your device.
  Your metadata should be an empty object: `{}` and query should be:

  `{ 'type': 'not-a-drone' }`

5) In the callback of **search()**, **console.log(response[0].hasOwnProperty('uuid'))**,
  **console.log(response[0].hasOwnProperty('token'))** and **console.log(response[0].hasOwnProperty('meshblu'))**

### Hints

 - You should call search() on your claimed meshblu-http instance
