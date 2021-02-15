const express = require('express')
const { getMoviesByName } = require('../controller/methods')
const router = express.Router()


router.get('/', (req, res) => {
    res.status(200).render('index', {
        title: 'Movies Info App',
        css: 'index.css'
    })
})


router.get('/getMoviesByname', (req, res) => {
    getMoviesByName(req, res)
})


module.exports = {
    router
}
