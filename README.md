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

### > Register a Device
This lesson will walk you through creating a new device. Everything in Meshblu is a device, including users, services, etc.

### > Get Current Device
This lesson will walk you through retrieving device information.

### > Update a Device
This lesson will walk you through updating properties on a device. Devices can have any arbitrary properties that you specify.

### > Unregister a Device
This lesson will walk you through removing a device.

### > My Devices
This lesson will walk you through getting all of your devices.

### > Reset Token
This lesson will walk you through resetting your devices token. To access a device, you will need to authenticate with both the uuid and a valid token.

### > Revoke Token
This lesson will walk you through revoking a valid token, thus making it invalid.

### > Generate Token
This lesson will walk you through generating a new token.

### > Search for Device
This lesson will walk you through searching for a device.

### > Get Subscriptions
This lesson will walk you through getting your device's subscriptions. Subscriptions are how devices can see messages from other devices. It is easy to send a message to all devices, but they will only see it if they are subscribed to the sender.

### > Create Subscription
This lesson will walk you through creating a new subscription.

### > Delete Subscription
This lesson will walk you through removing a subscription.

### > Send a Message
This lesson will walk you through sending a message from one device to another. You will also learn how to use meshblu-firehose to watch as messages come in.

## Meshblu Functions
For more information about how to use specific functions for each lesson, refer to the docs below...

All of the lessons use [meshblu-http](https://www.npmjs.com/package/meshblu-http)

The final lesson also uses [meshblu-firehose-socket.io](https://www.npmjs.com/package/meshblu-firehose-socket.io) to send and receive messages
