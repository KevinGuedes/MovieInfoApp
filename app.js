const express = require('express')
const bodyParser = require('body-parser')
const expressEjsLayout = require('express-ejs-layouts')
const { getMovieByName } = require('./server/controller/methods')


const server = express()
const port = process.env.PORT || 5001

server
    .use(express.static('public'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(expressEjsLayout)
    .use(router)

server
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname, 'server/views'))

server.get('/getMovieByName', getMovieByName)

server.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})
