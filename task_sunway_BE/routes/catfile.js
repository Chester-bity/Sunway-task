var express = require('express');
var router = express.Router();
var axios = require('axios')

router.get('/randomcatfact', async function(req, res, next) {
    const data = await axios.get('https://catfact/ninja/fact')
    .then(function (response) {
      // handle success
      return response
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });  
    res.send(data);
});

module.exports = router;
