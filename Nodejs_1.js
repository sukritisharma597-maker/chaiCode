const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })
const express = require('express');
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram', (req, res) => {
  res.send('SUKRITI HERE GUYSSSS!!')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})