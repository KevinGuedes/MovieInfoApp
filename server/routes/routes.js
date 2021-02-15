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

router.get('/getMoviesByname', async (req, res) => {

    try {

        const movies = moviesMapper(await getMoviesByName(req.query.movie))

        res.status(200).render('movies', {
            movies: movies,
            title: req.body.movie,
            css: 'movies.css'
        })

    }
    catch (error) {

        console.log(error.message)

        res.status(200).render('error', {
            layout: './error',
            title: 'Error',
            css: 'error.css'
        })

    }

})

router.get('/error', (req, res) => {

    res.status(200).render('error', {
        layout: './error',
        title: 'Error',
        css: 'error.css'
    })

})

module.exports = {
    router
}
