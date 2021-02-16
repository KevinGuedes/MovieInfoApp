const axios = require('axios')
const querystring = require('querystring')
const { StatusCodes } = require('http-status-codes')
const paths = require('../utils/paths')
const { ExternalApiError } = require('../error/errors')
require('dotenv').config({ path: './.env' })

const getMoviesByName = async (movie, page) => {

    const movieInfoQueryString = querystring.stringify({
        api_key: process.env.TMDB_API_KEY,
        query: movie,
        include_adult: true,
        language: 'en-US',
        page: page,
    })

    return await axios
        .get(`${paths.tmdbUrl}/search/movie?${movieInfoQueryString}`)
        .then(
            response => {

                if (response.status == StatusCodes.OK) {

                    console.log('Movies READY')
                    return response.data.results

                }
                else {

                    throw new ExternalApiError('Failed to retrieve data from The Movies Database (TMDB) API')

                }
            },
            error => {

                console.log(error.message)

                throw new ExternalApiError('Failed to retrieve data from The Movies Database (TMDB) API')

            }
        )

}

module.exports = {
    getMoviesByName
}
