const express = require('express')
const bodyParser = require('body-parser')
const { getMovieByName } = require('./server/controller/methods')
const server = express()
const port = process.env.PORT || 5001

server.use(bodyParser.json())

server.get('/getMovieByName', getMovieByName)

server.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})
