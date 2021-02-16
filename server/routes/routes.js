const express = require('express')
const { moviesInfoMapper } = require('../mappings/moviesInfoMapper')
const { movieDetailsMapper } = require('../mappings/movieDetailsMapper')
const {
    getMoviesByName,
    getMovieDetailsById,
} = require('../controller/methods')
const router = express.Router()

router.get('/', (req, res) => {

    res.status(200).render('index', {
        title: 'Movies Info App',
        css: 'index.css'
    })

})

router.get('/getMoviesByName', (req, res) => {

    let page = req.query.page || 1

    res.redirect(`/movies/${req.query.movie}/${page}`)

})


router.get('/getMovieDetailsById', (req, res) => {

    res.redirect(`/details/${req.query.id}`)

})

router.get('/movies/:movie/:page', async (req, res) => {

    try {
        const movieName = req.params.movie
        const actualPage = parseInt(req.params.page)
        const movies = moviesInfoMapper(await getMoviesByName(movieName, actualPage))

        res.status(200).render('movies', {
            movies: movies,
            title: req.body.movie,
            css: 'movies.css',
            movie: movieName,
            nextPage: actualPage + 1,
            previousPage: actualPage - 1,
        })

    }
    catch (error) {

        console.log(error.message)

        res.redirect('error')

    }

})

router.get('/details/:id', async (req, res) => {

    try {
        const id = req.params.id
        const details = movieDetailsMapper(await getMovieDetailsById(id))
        console.log(details)
        res.status(200).render('details', {
            title: 'Details',
            css: 'details.css',
            details,
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
