const paths = require('../utils/paths')

const moviesMapper = (movies) => {

    movies.map(function (movie) {
        return {
            title: movie.original_title,
            overview: movie.overview,
            poster: `${paths.imageUrl}${movie.poster_path}`,
        }
    })

    return movies
}

module.exports = {
    moviesMapper,
}
