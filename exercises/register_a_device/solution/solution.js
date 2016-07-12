var axios = require('axios')

axios.post('https://meshblu.octoblu.com/devices', {
    "type": "drone",
    "color": "black",
    "owner": "039accc2-eccb-4840-95a6-9511763f3d81",
    "name": "test",
    "meshblu": {
      "version": "2.0.0",
      "whitelists": {
        "discover": {
          "view": [{"uuid": "039accc2-eccb-4840-95a6-9511763f3d81"}]
        },
        "configure": {
          "update": [{"uuid": "039accc2-eccb-4840-95a6-9511763f3d81"}]
        }
      }
    }
  })
  .then(function (response) {
    console.log(response.data.owner)
    console.log(response.data.type)
    console.log(response.data.color)
  })
  .catch(function (response) {
    console.log(response)
  })
