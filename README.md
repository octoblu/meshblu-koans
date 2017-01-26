## Meshblu Koans...
...is a collection of lessons to help you learn more about Meshblu. Start your journey towards machine-to-machine instant-messaging enlightenment today!

If you would like to read more about Meshblu, [click here](https://meshblu.readme.io/)

## Usage
To use meshblu-koans, you will need to have [Node.js](https://nodejs.org/en/) installed

### Install:
```
npm install --global meshblu-koans
```

Before you run meshblu-koans, you should:

```
mkdir temp
cd temp
npm init
touch program.js
```

### Run:
```
meshblu-koans
```

## Current Lessons
Here's what you can expect to learn from meshblu-koans:

- ##### Register a Device


  Everything in Meshblu is a device, including users, services, etc. This lesson will walk you through creating a new device.
- #### Get Current Device

  hello world

- Update a Device
- Unregister a Device
- My Devices
- Reset Token
- Revoke Token
- Generate Token
- Search for Device
- Get Subscriptions
- Create Subscription
- Delete Subscription
- Send a Message

## Meshblu Functions
For more information about how to use specific functions for each lesson, refer to the docs below...

All of the lessons use [meshblu-http](https://www.npmjs.com/package/meshblu-http)

The final lesson also uses [meshblu-firehose-socket.io](https://www.npmjs.com/package/meshblu-firehose-socket.io) to send and receive messages
