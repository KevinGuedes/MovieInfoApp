const express = require('express')
const { moviesInfoMapper } = require('../mappings/moviesInfoMapper')
const { getMoviesByName } = require('../controller/methods')
const router = express.Router()

router.get('/', (req, res) => {

    res.status(200).render('index', {
        title: 'Movies Info App',
        css: 'index.css'
    })

})


router.get('/getMoviesByname', (req, res) => {

    let page = req.query.page || 1

    res.redirect(`/${req.query.movie}/${page}`)

})


router.get('/:movie/:page', async (req, res) => {

    try {
        const movieName = req.params.movie
        const actualPage = req.params.page
        const movies = moviesMapper(await getMoviesByName(movieName, actualPage))

        res.status(200).render('movies', {
            movies: movies,
            title: req.body.movie,
            css: 'movies.css',
            nextPage: actualPage + 1,
            previousPage: actualPage + 1
        })

    }
    catch (error) {

        console.log(error.message)

        res.redirect('error')

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
