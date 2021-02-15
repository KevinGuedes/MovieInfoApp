const axios = require('axios')
const querystring = require('querystring')
const { StatusCodes } = require('http-status-codes')
const paths = require('../utils/paths')
require('dotenv').config({ path: './.env' })


const buildImageUrl = (posterPath) => {
    return `${paths.imageUrl}${posterPath}`
}

const getMoviesByName = async (req, res) => {

    try {

        const movieInfoQueryString = querystring.stringify({
            api_key: process.env.TMDB_API_KEY,
            query: req.body.movie,
            include_adult: false,
            language: 'en-US'
        })

        const movieInfo = await axios.get(`${paths.tmdbUrl}/search/movie?${movieInfoQueryString}`)

        if (movieInfo.status == StatusCodes.OK) {
            res.status(200).render('movies', moviesMapper(movieInfo))
        }

    }
    catch (err) {

        console.log(err)
        res.status(500).send("Internal Server Error. Please, try again later")

    }
}

module.exports = {
    getMoviesByName
}
