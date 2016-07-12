var axios = require('axios')

axios.post('https://meshblu.octoblu.com/devices', {
    type: 'drone',
    color: 'black'
  })
  .then(function (response) {
    console.log(response.data.type, response.data.color)
  })
