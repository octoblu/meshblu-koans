1) Create a new file called **program.js**, then install/require 'meshblu-http'
  and create a new instance ( `var meshblu = new Meshblu()` )

2) **register(properties, function(error, response){})** a new device with Meshblu, then in the
  callback, claim your new device ( `var device = new Meshblu({ 'uuid': uuid, 'token': token })` )

3) In the callback of **register()**, **get** your devices with **mydevices(query, function(error, response){})**

4) In the callback **mydevices()**, **console.log(response)**

### Hints

 - You should call mydevices() on your claimed meshblu-http instance

- Your first parameter to mydevices() can just be an empty object: `{}`
