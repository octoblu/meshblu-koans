1) Create a new file called **program.js**, then install/require 'meshblu-http'

2) Create a new meshblu-http instance with no params: `var meshblu = new Meshblu()`

3) **register(properties, function(error, response){})** a new device with Meshblu

4) Your new device should contain the additional properties:

  `{ 'type': 'drone', 'color': 'black' }`

5) In the callback, **console.log(response.type)** and **console.log(response.color)**

### Hints

- You should call register() on your new meshblu-http instance
