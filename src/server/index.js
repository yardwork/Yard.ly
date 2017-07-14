const express = require('express')
const path = require('path')
const app = express()



app.use(express.static(path.join(__dirname, '../public')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.use('*', function (req, res) {
  res.status(404).send('File not found.')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
