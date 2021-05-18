
const express = require('express')
const request = require('request')
const sleep = require('sleep');
const app = express()
const port = 3000

app.get('/node', (req, res) => {

  // sleep random amount of time to test graphs
  var delay = (Math.floor(Math.random() * 500)) + 200

  sleep.msleep(delay)

  res.send('Hello World Node!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


app.get('/bbox1', (req, res) => {
  request.get('http://box:9090/').on('response', (response) => {
    console.log("bbox1 " + response.statusCode)
  })
  res.send("bbox1")
})

app.get('/bbox2', (req, res) => {
  request.get('http://box:9091/').on('response', (response) => {
    console.log("bbox2 " + response.statusCode)
  })
  res.send("bbox2")
})