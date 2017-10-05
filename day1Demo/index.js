


const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Messi er gud!')
})

app.get('/messi', function (req, res) {
    res.json({"name":"Lionel Andres Messi", "job":"god"});
  })
  

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


















