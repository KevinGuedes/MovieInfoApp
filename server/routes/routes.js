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
    const movies = moviesMapper(await getMoviesByName(req.body.movie))
    res.status(200).render('movies', {
        movies: movies,
        title: req.body.movie,
        css: 'movies.css'
    })
})


module.exports = {
    router
}
