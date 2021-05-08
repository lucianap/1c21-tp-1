
const express = require('express')
const sleep = require('sleep');
const app = express()
const port = 3000

app.get('/node', (req, res) => {

  // sleep random amount of time to test graphs
  var delay = (Math.floor(Math.random() * 500)) + 200

  sleep.msleep(delay)

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
