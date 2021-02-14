const axios = require('axios')
const querystring = require('querystring')
const { StatusCodes } = require('http-status-codes')
require('dotenv').config({ path: './.env' })

const getMovieByName = async (req, res) => {

    try {

        const movieInfoQueryString = querystring.stringify({
            api_key: process.env.TMDB_API_KEY,
            query: req.body.movie,
            include_adult: false,
            language: 'en-US'
        })
        const movieInfo = await axios.get(`${process.env.TMDB_URL}/search/movie?${movieInfoQueryString}`)

        const movieImageQueryString = querystring.stringify({
            api_key: process.env.TMDB_API_KEY
        })
        const movieImage = await axios.get(`${process.env.TMDB_URL}/configuration?${movieImageQueryString}`)

        if (movieInfo.status == StatusCodes.OK && movieImage.status == StatusCodes.OK) {
            const overview = movieInfo.data.results[0].overview

            const imageSize = movieImage.data.images.poster_sizes[4]
            const imageUrl = movieImage.data.images.base_url
            const imagePath = movieInfo.data.results[0].poster_path

            res.status(200).send({
                poster: `${imageUrl}${imageSize}${imagePath}`,
                overview: overview
            })
        }

    }
    catch (err) {

        console.log(err)
        res.status(500).send("Internal Server Error. Please, try again later")

    }
}

module.exports = {
    getMovieByName
}
