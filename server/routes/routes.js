const express = require('express')
const { moviesMapper } = require('../mappings/moviesMapper')
const { getMoviesByName } = require('../controller/methods')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).render('index', {
        title: 'Movies Info App',
        css: 'index.css'
    })
})

router.post('/getMoviesByname', async (req, res) => {
    const movieName = req.body.movie
    const movies = moviesMapper(await getMoviesByName(movieName))
    console.log(typeof movies)
    console.log(movies)

    res.status(200).render('movies', { movies })
})


module.exports = {
    router
}
