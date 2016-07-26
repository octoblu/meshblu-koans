var MeshbluHttp = require('meshblu-http')
var MeshbluSocketIO = require('meshblu')

var meshbluHttp = new MeshbluHttp()
var senderMeshblu, receiverMeshblu;
meshbluHttp.register({
  name: "Sender Device",
  type: "device:sender"
}, function(senderError, senderDevice){
  console.log("Sender Device", senderDevice)
  senderMeshblu = new MeshbluHttp({uuid: senderDevice.uuid, token: senderDevice.token})
  meshbluHttp.register({
    name: "Receiver Device",
    type: "device:receiver"
  }, function(err, receiverDevice){
    console.log("Receiver Device", receiverDevice);
    receiverMeshblu = new MeshbluSocketIO({
      uuid: receiverDevice.uuid,
      token: receiverDevice.token,
      resolveSrv: true
    });
    receiverMeshblu.connect(function(connectionError){
      console.log("Connection Error", connectionError);
    });
    receiverMeshblu.on('notReady', function(notReadyError){
      console.log("Not Ready could not connect");
    });
    receiverMeshblu.on('ready', function(e){
      console.log('Receiver Ready');
      senderMeshblu.message({devices: [receiverDevice.uuid], data:{
        payload: "hello"
      }}, function(sendError, result){
        if(sendError){
          console.log("Error Sending Device", sendError);
        }
        console.log("Result", result);
      });
    });

    receiverMeshblu.on('message', function(er, message){
      console.log("Message received", er);
    })
  })

})
